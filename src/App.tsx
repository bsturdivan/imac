import './styles/keyframes.css'
import './App.css'
import Headphones from './icons/Headphones'
import Power from './icons/Power'
import Terminal from './Terminal'
import { useEffect, useRef, useState } from 'react'

function App() {
  const onoffRef = useRef<HTMLInputElement>(null)
  const [renderTerminal, setRenderTerminal] = useState<boolean>(false)
  const poweredStateLocalStorage = localStorage.getItem('poweredOn') || 'true'
  const poweredState = JSON.parse(poweredStateLocalStorage)

  const handleCheckboxChange = (event: { target: { checked: boolean } }) => {
    const checked = event.target.checked
    localStorage.setItem('poweredOn', checked.toString())
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setRenderTerminal(!!onoffRef.current?.checked)
    }, 2000)

    return () => clearTimeout(timer)
  }, [onoffRef])

  return (
    <main>
      <input
        type='checkbox'
        id='on-off'
        defaultChecked={poweredState}
        onChange={handleCheckboxChange}
        ref={onoffRef}
      />

      <div className='computer-wrapper'>
        <div className='computer'>
          <div className='web-cam' />
          <h1 className='logo'>bSturd</h1>
          <div className='screen-frame' />
          <div className='screen-outer-container'>
            <div className='screen-border' />
            <div className='screen'>
              <div className='tube-arc'></div>
              <div className='tube-arc'></div>
              <div className='screen-interface'>{renderTerminal && <Terminal />}</div>
            </div>
          </div>

          <div className='utility-parent'>
            <label className='onoff' htmlFor='on-off'>
              <Power className='power' />
            </label>
            <div className='utility-container'>
              <div className='utility-tab'></div>
              <div className='utility-tab'></div>

              <div className='utilities'>
                <div className='cdr'></div>
                <div className='headphone-back'></div>
              </div>

              <div className='speakers'>
                <div className='speaker'>
                  <div className='cone'></div>
                </div>
                <div className='speaker'>
                  <div className='cone'></div>
                </div>
              </div>
            </div>

            <div className='utility-container-top'>
              <div className='utilities'>
                <div className='cdr'>
                  <div className='cdr-tabs'>
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <div className='headphone-container'>
                  <div className='headphone-jack'></div>
                  <div className='headphone-jack'></div>
                  <Headphones className='headphone-icon' />
                </div>
              </div>

              <div className='speakers speakers--bottom'>
                <div className='speaker dots'></div>
                <div className='speaker dots'></div>
              </div>

              <div className='speakers'>
                <div className='speaker dots' />
                <div className='speaker dots' />
              </div>

              <div className='speakers speakers--border'>
                <div className='speaker'>
                  <div className='speaker-tabs'>
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <div className='speaker'>
                  <div className='speaker-tabs'>
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>

              <div className='speakers speakers--top'>
                <div className='speaker'>
                  <div className='speaker-cutout' />
                </div>
                <div className='speaker'>
                  <div className='speaker-cutout' />
                </div>
              </div>
            </div>
          </div>

          <div className='flare1 flare' />
          <div className='flare2 flare' />
          <div className='flare3 flare' />
          <div className='flare4 flare' />
          <div className='flare5 flare' />
        </div>
        <div className='feet'>
          <div className='foot' />
          <div className='foot' />
        </div>

        <div className='computer-shadow' />
      </div>
    </main>
  )
}

export default App
