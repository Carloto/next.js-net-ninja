export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  const paths = data.map(planet => {
    return {
      params: {id: planet.id.toString()}
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await res.json();

  return {
    props: {planet: data}
  }
}

const Details = ({planet}) => {
  return ( 
    <div>
      <h1>{planet.name}</h1>
      <p>{planet.email}</p>
      <p>{planet.website}</p>
      <p>{planet.address.city}</p>
    </div>
   );
}
 
export default Details;