interface DialogueLine {
  speaker: string
  text: string
}

interface DialogueProps {
  lines: DialogueLine[]
}

export default function Dialogue({ lines }: DialogueProps) {
  return (
    <div className="dialogue">
      {lines.map((line, i) => (
        <div className="dialogue__line" key={i}>
          <span className="dialogue__speaker">{line.speaker}</span>
          <span className="dialogue__text">{line.text}</span>
        </div>
      ))}
    </div>
  )
}
