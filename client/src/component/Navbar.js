import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import styles from "./Navbar.module.css"
import { useCookies } from 'react-cookie' 
const Navbar = () => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["access_token"]);

  const logout = ()=>{
    setCookie("access_token","")
    window.localStorage.removeItem("userID")
    navigate("/auth")
  }
  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_content}>
        <Link to={"/"}>Home</Link>
        <Link to={"/create-recipe"}>CreateRecipe</Link>
        <Link to={"saved-recipe"}>SavedRecipe</Link>
        {!cookies.access_token? <Link to={"/auth"}>Login</Link> : (<button onClick={logout}>Logout</button>)}
      </div>
    </nav>
  )
}

export default Navbar