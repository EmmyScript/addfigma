import { Col, Row } from "react-bootstrap"
import userItems from "../data/item.json"
import {UserItem} from "../components/UserItem"
import Category from "./Category"
import {FcElectronics} from "react-icons/fc"


const ShoppingCart = () => {
  return (
    <>
    <div className=" shopping col-md-2 mt-4">
    <h1 className="shop-title">Categorys </h1>
    <span className=" electronics  "><FcElectronics />Electronic device</span>
 <Category/>
</div>

        <div className="col-md-10 mt-4">
        <div className="col-md-8  mb-3 d-flex justify-content-between">
        <form className="d-flex" role="search">
      <input className="form-control " type="search" placeholder="Search" aria-label="Search"/>
      
    </form>

    <div className="dropdown  w-50 d-flex ">
    <a className="nav-link p-3">
            Sortby:
          </a>
    
<select className="form-select">
    
    <option defaultValue = {" "}>most popular</option>
    <option defaultValue= {" "}>name</option>
    <option defaultValue= {" "}>email</option>
    <option defaultValue= {" "}>age</option>
</select>
    </div>
    
        </div>
       <div className=" bg-secondary active-file mb-4">
<h3> Active File:Electronic Device 
    
</h3>


       </div>
       

        
            
    
    <Row md={2} xs={1} xl={4} className="g-5">
      {userItems.map(item => (
        <Col  key={item.id} >
        <UserItem {...item}/>
        
        </Col>
      ))}
    </Row>
        
            
            
        </div>
        
    </>
  )
}

export default ShoppingCart