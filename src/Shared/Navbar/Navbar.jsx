
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from '../../assets/logo-main.png'
import useAdmin from "../../hooks/useAdmin";

const Navbar = () => {

  const { user, logOut } = useAuth()
  const [isAdmin] = useAdmin()

  const items = <>
  
    <li className="transition-transform duration-300 ease-in-out transform hover:-translate-y-1"><NavLink
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "font-bold" : ""}
      style={{ background: 'none' }}
      to={'/'}>Home</NavLink></li>

    <li className="transition-transform duration-300 ease-in-out transform hover:-translate-y-1"><NavLink 
    className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "font-bold" : ""}
      style={{ background: 'none' }} to={'/agreement'}>Apartments</NavLink></li>

    <li className="transition-transform duration-300 ease-in-out transform hover:-translate-y-1"><NavLink 
    className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "font-bold" : ""}
      style={{ background: 'none' }}
       to={'/whyUs'}>Why US</NavLink></li>

    <li className="transition-transform duration-300 ease-in-out transform hover:-translate-y-1"><NavLink className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "font-bold" : ""}
      style={{ background: 'none' }}
       to={'/blog'}>Blog</NavLink></li>

    <li className="transition-transform duration-300 ease-in-out transform hover:-translate-y-1">
      {
        user ? <p  style={{background:'none'}}
          onClick={logOut}
        >Logout</p>
          : <NavLink className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "font-bold" : ""}
        style={{ background: 'none' }} to={'/login'}>Login </NavLink>
      }
    </li>
    {
      user && isAdmin && <div>
        <li className="transition-transform duration-300 ease-in-out transform hover:-translate-y-1"><NavLink to={'/dashboard/adminProfile'}>Dashboard</NavLink></li>

      </div>
    }

    {
      user && !isAdmin && <div>
        <li className="transition-transform duration-300 ease-in-out transform hover:-translate-y-1"><NavLink style={{background:'none'}} to={'/dashboard/memberProfile'}>Dashboard</NavLink></li>

      </div>
    }


  </>

  return (
    <div>
      <div className="navbar bg-gray-100 py-4 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="  lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3  p-2  rounded-3xl w-52">
              {items}

            </ul>
          </div>
          <NavLink to={'/'}> <img className="w-24" src={logo} alt="" /> </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {items}

          </ul>


        </div>
        <div className="navbar-end">
          {
            user ? <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt='' />
                </div>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  {
                    user && isAdmin && <div>
                      <NavLink className="  font-bold  pl-12" to={'/dashboard/adminProfile'}>Dashboard</NavLink>

                    </div>
                  }

                  {
                    user && !isAdmin && <div>
                      <NavLink className="  font-bold  pl-12" to={'/dashboard/memberProfile'}>Dashboard</NavLink>

                    </div>
                  }
                </li>
                <li>
                  <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                </li>
                <li>
                  <button className="btn btn-sm  btn-ghost"
                    onClick={logOut}
                  >Logout</button>

                </li>
              </ul>
            </div>
              :
              <Link to='/login'>
                <button className="btn btn-sm  btn-ghost">Login</button>
              </Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
