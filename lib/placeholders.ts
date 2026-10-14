/**
 * Content guardrail (brief §3: "No fabricated proof").
 *
 * Every real-world input flows through one of two markers:
 *   todo(note)          – the input is missing. Renders a visible TODO in dev.
 *   verify(value, note) – a value exists but must be checked before publishing.
 *
 * `scripts/check-content.mjs` runs before `npm run build` and fails the
 * build while any marker remains in /content. Replace `todo(...)` with the
 * real value, and unwrap `verify(x, ...)` to plain `x` once it's confirmed.
 */

export type Todo = { readonly __placeholder: "todo"; readonly note: string };
export type Verify<T> = { readonly __placeholder: "verify"; readonly value: T; readonly note: string };
export type Slot<T> = T | Todo | Verify<T>;

export const todo = (note: string): Todo => ({ __placeholder: "todo", note });
export const verify = <T>(value: T, note: string): Verify<T> => ({ __placeholder: "verify", value, note });

function isMarker(v: unknown): v is { __placeholder: string } {
  return typeof v === "object" && v !== null && "__placeholder" in v;
}

export const isTodo = (v: unknown): v is Todo => isMarker(v) && v.__placeholder === "todo";
export const isVerify = (v: unknown): v is Verify<unknown> => isMarker(v) && v.__placeholder === "verify";

/** The usable value of a slot, or undefined while it's still a TODO. */
export function valueOf<T>(slot: Slot<T>): T | undefined {
  if (isTodo(slot)) return undefined;
  if (isVerify(slot)) return slot.value as T;
  return slot as T;
}
