import Filter from '../../components/Filter'
import Header from '../../components/Header'
import MainBanner from '../../components/MainBanner'
import SaleCard from '../../components/SaleCard'

import styles from './styles.module.scss'

const Home = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Filter />
        <div className={styles.main}>
          <MainBanner />
          <div className={styles.cards}>
            <SaleCard />
            <SaleCard />
            <SaleCard />
            <SaleCard />
            <SaleCard />
            <SaleCard />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home