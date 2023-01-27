import { useState } from 'react'

function Collapse({ title, text, collapseId }) {
  const [isVisible, setIsVisible] = useState('flex')
  const [isDown, setIsDown] = useState('down')

  return (
    <div id={`${collapseId}__container`} className="collapse">
      <div
        id={`${collapseId}__container__header`}
        className="collapse__header"
        onClick={() => {
          setIsVisible(isVisible ? false : true)
          setIsDown(isDown ? false : true)
        }}
      >
        <h2 className="collapse__header__title">{title}</h2>
        <span
          className={`fa-solid collapse__header__chevron fa-chevron-${
            isDown ? 'down' : 'up'
          }`}
        ></span>
      </div>
      <div
        id={`${collapseId}__container__body`}
        className="collapse__body"
        style={{ display: isVisible ? 'none' : 'flex' }}
      >
        <span>
          {Array.isArray(text) ? (
            text.map((content) => <h3 key={`content-${content}`}>{content}</h3>)
          ) : (
            <h3>{text}</h3>
          )}
        </span>
      </div>
    </div>
  )
}

export default Collapse
