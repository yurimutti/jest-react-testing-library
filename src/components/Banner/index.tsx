import styles from './Banner.module.scss'
import banner from '../../assets/images/banner-image.jpg'

function Banner() {
  return(
    <div className={styles.banner}>
      <img  src={banner} alt="Boku No Hero"></img>
    </div>
  )
}

export default Banner