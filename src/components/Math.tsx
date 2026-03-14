import katex from 'katex'
import 'katex/dist/katex.min.css'

function setKatex(el: HTMLElement | null, tex: string, displayMode: boolean) {
  if (el) katex.render(tex, el, { throwOnError: false, displayMode })
}

export function Inline({ tex }: { tex: string }) {
  return <span ref={(el) => setKatex(el, tex, false)} />
}

export function Block({ tex }: { tex: string }) {
  return <div ref={(el) => setKatex(el, tex, true)} />
}

/** Parse a string containing \(...\) delimiters into React elements with inline math. */
export function InlineText({ text }: { text: string }) {
  const parts = text.split(/\\\((.+?)\\\)/g)
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 0 ? <span key={i}>{part}</span> : <Inline key={i} tex={part} />
      )}
    </>
  )
}
