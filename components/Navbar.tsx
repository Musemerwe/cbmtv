'use client'
import Link from 'next/link';
import Image from 'next/image';


const Navbar = () => {
  return (
    <nav>
      <div className="nav-links">
        <Image src="/images/cbmtvwhitelogo.png"
        width={100} height={100} alt='cbntv logo' className='top-left-element'/>
        <Link href="/">Home</Link>
        <Link href="/channels">Channels</Link>
        <Link href="/programs">Programs</Link>
        <Link href="/contact">Contact</Link>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;

