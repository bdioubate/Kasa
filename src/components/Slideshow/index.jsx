import { useState } from 'react'

function Slideshow({ tab, slideShowId }) {
  const [count, setCount] = useState(0)

  async function prev() {
    const items = document.querySelectorAll('img.slideshow__img')
    const nbSlides = items.length
    count > 0 ? setCount(count - 1) : setCount(nbSlides - 1)
  }

  async function next() {
    const items = document.querySelectorAll('img.slideshow__img')
    const nbSlides = items.length
    items[count].classList.remove('active')
    count < nbSlides - 1 ? setCount(count + 1) : setCount(0)
  }

  return (
    <div id={`${slideShowId}`} className="slideshow">
      {tab.map((tag, index) =>
        Number(count) === Number(index) ? (
          <img
            key={`tag-${tag}`}
            src={tag}
            alt={index}
            className="slideshow__img active"
          />
        ) : (
          <img
            key={`tag-${tag}`}
            src={tag}
            alt={index}
            className="slideshow__img"
          />
        )
      )}
      {tab.length === 1 ? (
        <div></div>
      ) : (
        <div className="slideshow__container">
          <i className="fas fa-chevron-left" onClick={prev}></i>
          <span>
            {count + 1}/{tab.length}
          </span>
          <i className="fas fa-chevron-right" onClick={next}></i>
        </div>
      )}
    </div>
  )
}

export default Slideshow
