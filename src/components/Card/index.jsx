import { Link } from 'react-router-dom'

function Card({ picture, id, text }) {
  return (
    <Link className="card" to={`/logement/${id}`}>
      <img className="card__img" src={picture} id={id} alt={text} />
      <h2 className="card__text">{text}</h2>
    </Link>
  )
}

export default Card
