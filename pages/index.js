import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Planet List | Home</title>
        <meta name="keywords" content="planets" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium officiis nobis quam eveniet deserunt commodi praesentium laboriosam in soluta, modi reprehenderit. Velit, recusandae soluta earum pariatur maiores accusamus ut architecto!</p>
        <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium officiis nobis quam eveniet deserunt commodi praesentium laboriosam in soluta, modi reprehenderit. Velit, recusandae soluta earum pariatur maiores accusamus ut architecto!</p>
        <Link href="/planets"><a className={styles.btn}>See Planet Listing</a></Link>
      </div>
    </>
  )
}
