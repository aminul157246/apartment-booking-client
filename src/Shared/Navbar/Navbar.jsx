
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from '../../assets/logo-main.png'
import useAdmin from "../../hooks/useAdmin";


const Navbar = () => {

  const { user, logOut } = useAuth()
  const [isAdmin] = useAdmin()

  const items = <>
    <li><NavLink to={'/'}>Home</NavLink></li>
    <li><NavLink to={'/agreement'}>Apartments</NavLink></li>
    <li><NavLink to={'/whyUs'}>Why US</NavLink></li>
    <li><NavLink to={'/blog'}>Blog</NavLink></li>

    <li>
      {
        user ? <p className="btn btn-sm  btn-ghost"
          onClick={logOut}
        >Logout</p>
          : <NavLink to={'/login'}>Login </NavLink>
      }
    </li>
    {/* {
      user && isAdmin && <div>
        <li><NavLink to={'/dashboard/adminProfile'}>Dashboard</NavLink></li>
        {user.displayName}
      </div>
    }

    {
      user && !isAdmin && <div>
      <li><NavLink to={'/dashboard/memberProfile'}>Dashboard</NavLink></li>
      {user.displayName}
    </div>
    } */}


  </>

  return (
    <div>
      <div className="navbar  ">
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
                  {/* <NavLink to={'/dashboard'} className="btn btn-sm btn-ghost">Dashboard</NavLink> */}
                  {
                    user && isAdmin && <div>
                      <NavLink className="btn btn-sm btn-ghost text-center" to={'/dashboard/adminProfile'}>Dashboard</NavLink>
                     
                    </div>
                  }

                  {
                    user && !isAdmin && <div>
                      <NavLink className="btn btn-sm btn-ghost text-center" to={'/dashboard/memberProfile'}>Dashboard</NavLink>
                     
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
