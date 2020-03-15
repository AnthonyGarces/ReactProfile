import Nav from 'react-bootstrap/Nav';

export default function Navbar(){
    
    return(
        <Nav className="navbar navbar-light bg-light">
            <div className='bg-info text-white p-1 justify-content'>
                Esteban Garces
            </div>
            <Nav className='justify-content-end'>
                <Nav.Item>
                    <Nav.Link eventKey={1} href='/' className='nav-link list-group-item px-2'>About Me</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey={2} href='/portfolio' className='nav-link list-group-item px-2'>Portfolio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey={3} href='/contact' className='nav-link list-group-item px-2'>Contact</Nav.Link>
                </Nav.Item>
            </Nav>
        
            <style jsx>{`
            div {
                font-size: 34px
                }
            `}</style>
        </Nav>
        )}
;

