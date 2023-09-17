import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/Ai';

const Nav = () => {


    const [open, setOpen] = useState(false);

    const routes = [
        { path: '/', id: 'home', name: 'Home' },
        { path: '/about', id: 'about', name: 'About Us' },
        { path: '/services', id: 'services', name: 'Our Services' },
        { path: '/contact', id: 'contact', name: 'Contact Us' },
        { path: '/dashboard', id: 'dashboard', name: 'User Dashboard' }
    ];



    return (
        <nav className="p-5">
            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open === true ? 
                    <AiOutlineClose></AiOutlineClose> 
                    : 
                    <AiOutlineMenu></AiOutlineMenu>
                }
            
            </div>


            {/* <ul className={`md:flex gap-10 md:justify-center absolute md:static duration-1000 px-6 ${open ? 'top-10' : 'hidden'}`}></ul> or, */}

            <ul className={`md:flex gap-8 md:justify-center absolute md:static duration-1000 px-6 ${open ? 'top-10' : '-top-60'}`}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Nav;