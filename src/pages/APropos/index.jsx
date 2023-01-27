import Banner from '../../components/Banner'
import ImageBanner from '../../assets/mountain-landscape.jpeg'
import Collapse from '../../components/Collapse'

function APropos() {
  return (
    <div id="about">
      <Banner picture={ImageBanner} bannerId="about__banner" />
      <Collapse
        title={'Fiabilite'}
        text={`Les annonces postées sur Kasa garantissent une fiabilité totale. 
                Les photos sont conformes aux logements, et toutes les informations 
                sont régulièrement vérifiées  par nos équipes.`}
        collapseId={'about'}
      />
      <Collapse
        title={'Respect'}
        text={`La bienveillance fait partie des valeurs fondatrices de Kasa. 
                Tout comportement discriminatoire ou de perturbation du voisinage 
                entraînera une exclusion de notre plateforme.`}
        collapseId={'about'}
      />
      <Collapse
        title={'Service'}
        text={`Nos équipes se tiennent à votre disposition pour vous fournir une 
                expérience parfaite. N'hésitez pas à nous contacter si vous avez la 
                moindre question.`}
        collapseId={'about'}
      />
      <Collapse
        title={'Sécurité'}
        text={`La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que 
                pour les voyageurs, chaque logement correspond aux critères de 
                sécurité établis par nos services. En laissant une note aussi bien 
                à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que 
                les standards sont bien respectés. Nous organisons également des 
                ateliers sur la sécurité domestique pour nos hôtes.`}
        collapseId={'about'}
      />
    </div>
  )
}

export default APropos
