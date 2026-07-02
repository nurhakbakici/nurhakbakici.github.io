import type { TimelineItem } from '../data/content'
import './Timeline.css'

type Props = {
  items: TimelineItem[]
}

export default function Timeline({ items }: Props) {
  return (
    <div className="timeline">
      {items.map((item) => {
        const content = (
          <>
            <h3>{item.title}</h3>
            {item.subtitle && <h4>{item.subtitle}</h4>}
            {item.description && <p>{item.description}</p>}
            {item.bullets && (
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
          </>
        )

        if (item.url) {
          return (
            <a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="timeline-item timeline-item-link"
            >
              {content}
            </a>
          )
        }

        return (
          <div key={item.title} className="timeline-item">
            {content}
          </div>
        )
      })}
    </div>
  )
}
