import Input from '../Terminal/Input'
import { useState, useEffect, useRef } from 'react'

function randomNumber(min: number, max: number) {
  return Math.random() * (max - min) + min
}

function Line({
  text = '',
  index,
  lastItem,
  setRenderedLines,
  onAbortIntro,
  allText,
}: {
  text: string
  index: number
  lastItem: boolean
  setRenderedLines: React.Dispatch<React.SetStateAction<string[]>>
  onAbortIntro: () => void
  allText: string[]
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const doneRef = useRef(false)

  useEffect(() => {
    if (currentIndex >= text.length) {
      if (!doneRef.current && index + 1 !== allText.length) {
        doneRef.current = true
        setRenderedLines((prevText: string[]) => [...prevText, allText[index + 1]])
      }
      return
    }

    const delay = currentIndex === 0 ? 666 : randomNumber(70, 120)
    const timeout = setTimeout(() => setCurrentIndex((prev) => prev + 1), delay)

    return () => clearTimeout(timeout)
  }, [currentIndex, text, index, setRenderedLines, allText])

  const lineOfText = text.slice(0, currentIndex)

  return (
    <Input name='' command={lineOfText} output='' lastItem={lastItem} onSubmit={onAbortIntro} />
  )
}

export default Line
