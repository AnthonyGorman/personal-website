interface PoemProps {
  title: string
  stanzas: string[][]
}

export default function Poem({ title, stanzas }: PoemProps) {
  return (
    <div className="poem">
      <p className="poem__title">{title}</p>
      {stanzas.map((stanza, i) => (
        <div className="poem__stanza" key={i}>
          {stanza.map((line, j) => (
            <p className="poem__line" key={j}>{line}</p>
          ))}
        </div>
      ))}
    </div>
  )
}
