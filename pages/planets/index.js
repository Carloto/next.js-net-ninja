import styles from '../../styles/Planets.module.css';
import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { planets: data }
  }
}

const Planets = ({ planets }) => {
  return (
    <div>
      <h1>All Humans</h1>
      {planets.map(planet => (
        <Link href={'/planets/' + planet.id} key={planet.id}>
          <a className={styles.single}>
            <h3>{ planet.name }</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}

export default Planets;