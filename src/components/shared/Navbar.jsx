import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"

const Navbar = () => {
    const links = <>
        <li className="mx-2 font-medium"><Link to={'/'}>Home</Link></li>
        <li className="mx-2 font-medium"><Link to={'/'}>About</Link></li>
        <li className="mx-2 font-medium"><Link to={'/'}>Porfolio</Link></li>
        <li className="mx-2 font-medium"><Link to={'/'}>Client</Link></li>
        <li className="mx-2 font-medium"><Link to={'/'}>Blog</Link></li>
        <li className="mx-2 font-medium"><Link to={'/'}>Contact</Link></li>
    </>
    return (
        <div className="navbar text-white py-5 px-7 lg:px-32 relative" 
        style={{background: "linear-gradient(123.4deg, #BD1F17 40.8%, #A61D13 76.4%, #8E1B0F 120.69%)"}}>
            <div className="navbar-start">
                <div className="dropdown absolute right-5">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 
                    rounded-box w-52 absolute right-8 text-black font-rale">
                        {links}
                    </ul>
                </div>
                <a href="/" className="btn btn-ghost text-3xl font-semibold font-pop">
                <img src={logo} alt="Logo" /> Restau<span className="-ml-2 font-normal">rant</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-rale">
                    {links}
                </ul>
            </div>
            <div className="navbar-end hidden lg:flex">
                <Link className="btn bg-[#FEBF00] font-robo font-bold border-2 border-[#FEBF00] 
                hover:border-[#FEBF00] hover:hover:text-[#FEBF00] hover:bg-transparent" to="/">
                    Book a Table</Link>

            </div>
        </div >
        
    );
};

export default Navbar;