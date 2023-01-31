import Collapse from '../../components/Collapse'
import LogementsList from '../../logements.json'
import { useParams, useNavigate } from 'react-router-dom'
import Rattings from '../../components/Rattings'
import Slideshow from '../../components/Slideshow'
import { useEffect, useState } from 'react'

function Logement() {
  const { id } = useParams()

  const navigate = useNavigate()

  const [ben, setBen] = useState()

  useEffect(() => {
    const exist = LogementsList.find((item) => item.id === { id }.id)
    setBen(exist)
    if (exist === undefined) {
      navigate(`/Kasa/404`, { replace: true })
    }
  }, [id, navigate])

  return (
    ben && (
      <div id="logement">
        <Slideshow tab={ben.pictures} slideShowId={'logement__slideshow'} />
        <div id="logement__container">
          <div id="logement__container__title">
            <h2>{ben.title}</h2>
          </div>
          <div id="logement__container__location">
            <h3>{ben.location}</h3>
          </div>
          <div id="logement__container__ratting">
            <Rattings count={ben.rating} />
          </div>
          <div id="logement__container__host">
            <h3>{ben.host.name}</h3>
            <img src={ben.host.picture} alt={ben.title} />
          </div>
          <div id="logement__container__tags">
            {ben.tags.map((tag) => (
              <span key={`tag-${tag}`}>{tag}</span>
            ))}
          </div>
        </div>
        <div id="logement__collapse">
          <Collapse
            title={'Description'}
            text={ben.description}
            collapseId={'logement__collapse'}
          />
          <Collapse
            title={'Équipements'}
            text={ben.equipments}
            collapseId={'logement__collapse'}
          />
        </div>
      </div>
    )
  )
}

export default Logement
