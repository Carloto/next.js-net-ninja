import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return ( 
    <nav>
      <div className="logo">
        <Image src="/ufo.png" height={77} width={77} />
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/planets"><a>Planet Listing</a></Link>
    </nav>
   );
}
 
export default Navbar;