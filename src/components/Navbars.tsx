import {Button,  Nav, Row, Stack  } from "react-bootstrap"
import { FaFacebook, FaInstagram, FaPinterest, FaTelegram, FaTwitter, FaUber, FaWhatsapp,
 FaUser, FaAdjust,FaCompressArrowsAlt, FaHotel} from "react-icons/fa"
 import{FaUsersGear,FaSatelliteDish } from "react-icons/fa6"
 import{MdOutlinePhoneCallback, MdShoppingCart, MdOutlineAddIcCall} from "react-icons/md";
import { Link } from "react-router-dom"
import {LuDisc3 } from "react-icons/lu"


const Navbars= () => {
  return (
  
<div className="container-fluiid " >
    <Row  className =" nav-item " >

<div className=" all-nav p-3 col-md-4">
<a className="  electronics navbar-brand text-white" href="#"><FaSatelliteDish /> JOBBER </a>
  
</div>
<div className="all-nav p-3 col-md-8">
  
<Nav className="  nav-top d-flex">
  <Stack direction="horizontal" gap={2}>
    <h2>Follow us:</h2>
<span><FaWhatsapp/></span>
<span><FaFacebook/></span>
<span><FaTwitter/></span>
<span><FaTelegram/></span>
<span><FaPinterest/></span>
<span><FaUber/></span>

<span><FaInstagram /></span>
</Stack>


        <div className="p-2 dropdown  d-flex ">
    <h1 className="p-1">Eng:</h1>
          
    
<select className="form-select">
    
  <option defaultValue = {" "}>ENG</option>
    <option defaultValue= {" "}>name</option>
    <option defaultValue= {" "}>email</option>
    <option defaultValue= {" "}>age</option>
</select>
    </div>
        <div className="p-2 dropdown d-flex ">
    <h2 className="p-1">Usd: </h2>
          
    
<select className="form-select">
    
    <option defaultValue = {" "}>USD</option>
    <option defaultValue= {" "}>name</option>
    <option defaultValue= {" "}>email</option>
    <option defaultValue= {" "}>age</option>
</select>
    </div>

    
</Nav>
</div>

    

    <nav className="navbar p-3 all-nav text-white">
  
    <a className="col-md-2 navbar-brand text-white" href="#"><span><LuDisc3 /></span>Cilicon</a>
   
    
  
    <form className=" col-md-6 d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success bg-info" type="submit">Search</button>
    </form>
  
<Nav  className =" col-md-3 d-flex ">
<Stack direction="horizontal" gap={3}>
<Link to = '/cart'>
  <Button style={{width: "3rem", height: "3rem", position:"relative" }} variant="outline-secondary" className="rounded-circle">
    <span style={{color: "white"}}><MdShoppingCart /></span>
    <div className="rounded-circle bg-danger d-flex justify-content-center" style={{color:"white", width: "1.5rem",
     height:"1.5rem", position:"absolute", right:0, bottom:0, transform:"translate(25%, 25%)" }}>5

    </div>
    
  </Button>
  </Link>
  
  <span><FaUsersGear /></span>
  
  <span><FaUser/></span>
  </Stack>
  </Nav>



  
    

</nav>



<Nav className="navbar bg-white p-2 me-5">
             
            <Nav className="d-flex justify-content-between p-3">
            <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            All Category
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <Stack direction="horizontal" gap={1}>
        <h1><span><FaAdjust/>track order</span></h1>
        <h2><span><FaCompressArrowsAlt />Compared item</span></h2>
        <h3><span><MdOutlinePhoneCallback />customer support</span></h3>
        <h4><span><FaHotel/>need help</span></h4>
        </Stack>
            </Nav>
            <span> <MdOutlineAddIcCall />09154040945</span>
            

        </Nav>
        


        <Nav className="bg-secondary ">
          
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"white"}}>
            Home
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
          
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"white"}}>
            Shop
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"white"}}>
            Electronic
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        </Nav>
        

        
  </Row>
    </div>


    
  )
}

export default Navbars;