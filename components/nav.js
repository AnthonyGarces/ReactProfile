import Link from 'next/link';

const Nav = () => (
    <div>
        <Link href="/">
            <a className="">Home</a>
        </Link>
        <Link href ="/portfolio">
            <a className="">Portfolio</a>        
        </Link>
        <Link href="/contact">
            <a className="">Contact</a>
        </Link>
    </div>
);

export default Nav;
