import { Row } from "react-bootstrap"





const Cart = () => {
  return (
    <>
    <div className="cart">
      

      <Row className="pt-5">
      <div className="col-md-2 title">
            <h1 className="bg-info text-white">505 NOT FOUND</h1>
          </div>
          <div className="col-md-10">
        <div className=" found  d-flex justify-content-between  pt-5">
          

          <div className="col-md-6  align-items-center pt-5">
            
            <img
              src="./image/e.jpg"
              alt="./image/e.jpg"
              width={400}
              height={200}
              style={{objectFit: "cover"}}
            />
            
          </div>
          <div className="bg-primary text-white col-md-6 pag">
            <h1 className="pt-5 mt-5">i have bad news for you</h1>
            <p>
              The page you are looking for might be 
              removed or is temporarily unavailable try again later if possible or used other means
            </p>
            <button className="bg-black text-white p-2 ">
              HOME PAGE FOUND
            </button>
          </div>
        </div>
        </div>
        
      </Row>
    </div>
    </>
  )
}

export default Cart