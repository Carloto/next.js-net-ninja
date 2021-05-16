import styles from '../../styles/Planets.module.css'

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
      <h1>All Planets</h1>
      {planets.map(planet => (
        <div key={planet.id}>
          <a className={styles.single}>
            <h3>{ planet.name }</h3>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Planets;