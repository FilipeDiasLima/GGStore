import Header from '../../components/Header'
import LibCard from '../../components/LibCard'
import styles from './styles.module.scss'

const Library = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <LibCard />
        <LibCard />
        <LibCard />
        <LibCard />
        <LibCard />
        <LibCard />
        <LibCard />
        <LibCard />
        <LibCard />
      </div>
    </>
  )
}

export default Library