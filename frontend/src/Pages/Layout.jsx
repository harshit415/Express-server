import React from 'react'
import {Link, Outlet} from 'react-router-dom'
const Layout = () => {
  return (
    <>
    
   <center> <Link to="home">Home</Link>   |
    <Link to="display">Display</Link>   |
    <Link to="insert">Insert</Link>    |
</center>
<br /><br />

<main>
    <Outlet/>
</main>
<br /><br />


<footer>
    <center>

www.MyCompany.com
</center>

</footer>


    
    </>
  )
}

export default Layout
