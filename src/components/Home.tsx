import { Row } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";

const Home = () => {
  return (
    <>
    <div className="container-fliud">
      <div>
        <ProgressBar>
          <ProgressBar striped variant="success" now={35} key={1} />
          <ProgressBar variant="warning" now={20} key={2} />
          <ProgressBar striped variant="danger" now={10} key={3} />
        </ProgressBar>
      </div>
      <Row>
      <div className="col-md-2 title">
            <h1 >404 NOT FOUND</h1>
          </div>
          <div className="col-md-10">
        <div className=" found  d-flex justify-content-between  pt-5">
          

          <div className="col-md-6  align-items-center pt-5">
            <h1>Lions</h1>
            <img
              src="./image/lion.PNG"
              alt="./image/lion.PNG"
              width={400}
              height={200}
              style={{objectFit: "cover"}}
            />
            
          </div>
          <div className="col-md-6 pag">
            <h1 className="pt-5 mt-5">i have bad news for you</h1>
            <p>
              The page you are looking for might be 
              removed or is temporarily unavailable
            </p>
            <button className="bg-black text-white p-2 ">
              Back TO HOME PAGE
            </button>
          </div>
        </div>
        </div>
        
      </Row>
      </div>
    </>
  );
};

export default Home;
