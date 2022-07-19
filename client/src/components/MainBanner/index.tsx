import mainBanner from '../../assets/main-banner.jpg'
import styles from './styles.module.scss'

const MainBanner = () => {
  return (
    <div className={styles.zoom}>
      <div
        style={{
          backgroundImage: `url(${mainBanner})`,
          backgroundSize: 'cover',
          backgroundAttachment: 'local',
          backgroundPosition: 'center'
        }}
        className={styles.container}
      >
        <div>
          <strong>Horizon</strong>
          <strong>Forbidden West</strong>
        </div>
      </div >
    </div>
  )
}

export default MainBanner