import Input from '../Terminal/Input'
import { useState, useEffect, useRef } from 'react'

function randomNumber(min: number, max: number) {
  return Math.random() * (max - min) + min
}

function Line({
  text = '',
  index,
  setRenderedLines,
  onAbortIntro,
  setIntroComplete,
  allText,
}: {
  text: string
  index: number
  setRenderedLines: React.Dispatch<React.SetStateAction<string[]>>
  onAbortIntro: () => void
  setIntroComplete: (value: boolean) => void
  allText: string[]
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const doneRef = useRef(false)

  useEffect(() => {
    if (currentIndex >= text.length) {
      if (!doneRef.current) {
        if (index + 1 !== allText.length) {
          doneRef.current = true
          setRenderedLines((prevText: string[]) => [...prevText, allText[index + 1]])
        } else {
          setIntroComplete(true)
        }
      }
      return
    }

    const delay = currentIndex === 0 ? 666 : randomNumber(70, 120)
    const timeout = setTimeout(() => setCurrentIndex((prev) => prev + 1), delay)

    return () => clearTimeout(timeout)
  }, [currentIndex, text, index, setRenderedLines, allText, setIntroComplete])

  const lineOfText = text.slice(0, currentIndex)

  return <Input name='' command={lineOfText} output='' lastItem={false} onAbort={onAbortIntro} />
}

export default Line
