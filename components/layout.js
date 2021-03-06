import Head from 'next/head';
import Navbar from './nav';
import Footer from './footer';
// import background from '../public/images/light_honeycomb.png';
//background not loading properly style={{ backgroundImage:`url(${background})`}}

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>Esteban Garces</title>
                <link 
                    rel="stylesheet" 
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                    crossorigin="anonymous"
                />
            </Head>
            <Navbar />
            { props.children }
            <Footer />
        </div>
    )
};

export default Layout;