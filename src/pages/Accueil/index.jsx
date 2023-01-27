import Banner from '../../components/Banner'
import Card from '../../components/Card'
import ImageBanner from '../../assets/coast-landscape.jpeg'
import LogementsList from '../../logements.json'

function Home() {
  return (
    <div id="home">
      <Banner
        picture={ImageBanner}
        texte={'Chez vous, partout et ailleurs'}
        bannerId="home__banner"
      />

      <div id="home__cards">
        {LogementsList.map((profile, index) => (
          <Card
            key={`${profile.id}-${index}`}
            picture={profile.cover}
            id={profile.id}
            text={profile.title}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
