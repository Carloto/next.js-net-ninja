import Link from 'next/link'

const Navbar = () => {
  return ( 
    <nav>
      <div className="logo">
        <h1>Conquered Planets</h1>
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/planets"><a>Planet Listing</a></Link>
    </nav>
   );
}
 
export default Navbar;