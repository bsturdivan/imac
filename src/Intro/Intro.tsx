import { useEffect, useState } from 'react'
import { intro } from '../commands'
import Line from './Line'

function Intro({ setIntroComplete }: { setIntroComplete: (value: boolean) => void }) {
  const [renderedLines, setRenderedLines] = useState<string[]>([intro[0]])

  const handleAbortIntro = () => {
    setIntroComplete(true)
  }

  useEffect(() => {
    if (renderedLines.length === intro.length) {
      setIntroComplete(true)
    }
  }, [renderedLines, setIntroComplete])

  return (
    <>
      {renderedLines.length <= intro.length &&
        renderedLines.map((item, index) => (
          <Line
            text={item}
            index={index}
            key={item}
            allText={intro}
            setRenderedLines={setRenderedLines}
            onAbortIntro={handleAbortIntro}
          />
        ))}
    </>
  )
}

export default Intro
