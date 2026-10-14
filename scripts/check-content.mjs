#!/usr/bin/env node
/**
 * Launch gate. Fails while any todo()/verify() marker remains in /content.
 * It is opt-in: the normal build (staging, previews) does not run it.
 *
 *   npm run build           → no gate (what staging runs; markers render visibly)
 *   npm run build:strict    → gated; use this as the production build command
 *   npm run check           → just print the outstanding list
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const contentDir = join(root, "content");
const reportOnly = process.argv.includes("--report");

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : p.endsWith(".ts") ? [p] : [];
  });
}

/** Returns the string literals inside the call that opens at `start` (just past the "("). */
function callStrings(src, start) {
  const strings = [];
  let depth = 1;
  for (let i = start; i < src.length && depth > 0; i++) {
    const c = src[i];
    if (c === "(") depth++;
    else if (c === ")") depth--;
    else if (c === '"' || c === "'" || c === "`") {
      let j = i + 1;
      while (j < src.length && src[j] !== c) j += src[j] === "\\" ? 2 : 1;
      strings.push(src.slice(i + 1, j));
      i = j;
    }
  }
  return strings;
}

const marker = /\b(todo|verify)\(/g;
const findings = [];

for (const file of walk(contentDir)) {
  const src = readFileSync(file, "utf8");
  for (const m of src.matchAll(marker)) {
    // Skip imports such as `import { todo, verify } from ...`
    const lineText = src.slice(src.lastIndexOf("\n", m.index) + 1, src.indexOf("\n", m.index));
    if (/^\s*(import|export)\b/.test(lineText)) continue;
    const line = src.slice(0, m.index).split("\n").length;
    const strings = callStrings(src, m.index + m[0].length);
    const note = (strings.at(-1) ?? "").replace(/\s+/g, " ");
    findings.push({ kind: m[1].toUpperCase(), where: `${relative(root, file)}:${line}`, note });
  }
}

if (findings.length === 0) {
  console.log("✓ Content check passed: no placeholders remain.");
  process.exit(0);
}

const todos = findings.filter((f) => f.kind === "TODO").length;
const verifies = findings.length - todos;
console.log(`\nContent check: ${todos} TODO, ${verifies} VERIFY\n`);
for (const f of findings) console.log(`  [${f.kind.padEnd(6)}] ${f.where.padEnd(28)} ${f.note}`);

if (reportOnly) process.exit(0);
console.error("\n✗ Production build blocked until every item above is resolved (brief §3).");
console.error("  To build a review draft anyway: npm run build\n");
process.exit(1);
