export type commandOptions = 'whatis' | 'whoami' | 'help'
export const openOptions = ['resume', 'github', 'linkedin', 'instagram']

export const whatis = `Apple iMac G3
Color: Blueberry
Release Date: October 1999

Hardware
|    Model Name:	iMac G3
|    Model Identifier:	PowerMac2,1
|    Model Number:	M5521 (EMC 1821)
|    Architecture: 32-bit
|    Processor Speed: 350 MHz
|    Processor Type: PowerPC 750 (G3)
|    Memory:	64 MB
|    Display: 13.8"
|    Resolution: 800x600

Drive
|    Capacity: 6.0 GB
|    Medium Type: HDD

Software
|    System Version: Mac OS 9.0
\n
But I am not an Apple iMac.
I am pixels on a screen placed here with HTML and CSS representing
a physical piece of technology pivotal to the story of Brian Sturdivan.
Much like in the year 1999, creativity was found in the constraints.
I was a simple hobby for Brian, enjoying the art of CSS.
`

export const whoami = `I am Brian Sturdivan.
I write instructions for a computer. It’s something I love—
to converse with a computer and humanize it, to teach it to be approachable to
my nephew, my parents, and every person of every type in between. But I am
not only that. I design, make art and music, I am a friend, but most importantly,
a fellow human.

"I live on Earth at present, and I don’t know what I am. I know that I am not a
 category. I am not a thing—a noun. I seem to be a verb, an evolutionary
 process – an integral function of the universe."
  —R. Buckminster Fuller
`

export const help = `These are the commands available in this simulation:
|    whatis         A comprehensive list of system specs.
|    whoami      A brief overview of Brian Sturdivan.
|    open [resume | github | linkedin | instagram]     Visit links about Brian.
`

export const intro = [
  'My name is Brian Sturdivan and this is my art project.',
  'This iMac G3 was made with basic HTML and CSS, no images or SVG effects were used.',
  'No AI was used in the making of this art; it was made purely for the joy of the challenge.',
  '  ',
  'You are in a simulated unix shell. Type `help` to get started.',
]

export const open = (command: string) => {
  if (!command) {
    return
  }

  if (command === 'github') {
    return window.open('https://github.com/bsturdivan', '_blank')?.focus()
  }

  if (command === 'linkedin') {
    return window.open('https://www.linkedin.com/in/bsturd/', '_blank')?.focus()
  }

  if (command === 'instagram') {
    return window.open('https://www.instagram.com/bsturd/', '_blank')?.focus()
  }

  if (command === 'resume') {
    return window.open('/resume/Brian-Sturdivan-Resume.pdf', '_blank')?.focus()
  }
}
