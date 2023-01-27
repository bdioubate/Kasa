function Banner({ picture, texte, bannerId }) {
  return (
    <div className="banner" id={`${bannerId}`}>
      <img className="banner__img" src={picture} alt="coast landscape" />
      <h1 className="banner__text">{texte}</h1>
    </div>
  )
}

export default Banner
