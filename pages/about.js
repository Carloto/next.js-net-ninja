import Head from "next/head";

const About = () => {
  return ( 
    <>
      <Head>
          <title>Planet List | About</title>
          <meta name="keywords" content="planets" />
      </Head>
      <div>
        <h1>About</h1>
        <p>This site presents a list of planets that where conquered by the Aliens.</p>
        <p>Earth is safe, for now...</p>
      </div>
    </>
   );
}
 
export default About;