/** Renders a string in which {{...}} marks left-to-right fragments (prices, emails) inside Arabic text. */
export function Rich({ text }: { text: string }) {
  const parts = text.split(/(\{\{.*?\}\})/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("{{") ? (
          <span key={i} className="ltr-run">
            {part.slice(2, -2)}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
}
