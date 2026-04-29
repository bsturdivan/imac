import './App.css'

function App() {
  return (
    <main>
      <div className='computer'>
        <div className='screen-frame'></div>
        <div className='screen'></div>

        <div className='utility-parent'>
          <div className='utility-container'>
            <div className='utility-tab'></div>
            <div className='utility-tab'></div>

            <div className='utilities'>
              <div className='cdr'></div>
              <div className='headphone-back'></div>
              <button className='onoff' type='button'></button>
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
            {/* <div className='utilities'>
              <div className='cdr'></div>
              <div className='headphone-back'></div>
              <button className='onoff' type='button'></button>
            </div> */}

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
      </div>
    </main>
  )
}

export default App
