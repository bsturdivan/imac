import './App.css'
import Headphones from './icons/Headphones'
import Power from './icons/Power'

function App() {
  return (
    <main>
      <div className='computer'>
        <div className='web-cam' />
        <div className='screen-frame' />
        <div className='screen-border' />
        <div className='screen' />

        <div className='utility-parent'>
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
              <button className='onoff' type='button'>
                <Power className='power' />
              </button>
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
    </main>
  )
}

export default App
