import { Fragment } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

/** `**bold**` or `[text](href)`. */
const TOKEN = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;

const linkClass =
  "text-v4-ink underline decoration-v4-ink/30 underline-offset-4 transition-colors hover:decoration-v4-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-ink";

/** Renders the inline markup of a V4 article text field. */
export function Inline({ text }: { text: string }) {
  const out: ReactNode[] = [];
  let last = 0;
  let key = 0;
  for (const m of text.matchAll(TOKEN)) {
    const at = m.index ?? 0;
    if (at > last) out.push(<Fragment key={key++}>{text.slice(last, at)}</Fragment>);
    if (m[1] !== undefined) {
      out.push(
        <strong key={key++} className="font-semibold text-v4-ink">
          {m[1]}
        </strong>,
      );
    } else {
      const [label, href] = [m[2], m[3]];
      out.push(
        href.startsWith("/") ? (
          <Link key={key++} to={href} className={linkClass}>
            {label}
          </Link>
        ) : (
          <a key={key++} href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
            {label}
          </a>
        ),
      );
    }
    last = at + m[0].length;
  }
  if (last < text.length) out.push(<Fragment key={key++}>{text.slice(last)}</Fragment>);
  return <>{out}</>;
}

/** The same text without markup, for JSON-LD and meta fields. */
export const plain = (text: string): string => text.replace(TOKEN, (_m, bold, label) => bold ?? label);
