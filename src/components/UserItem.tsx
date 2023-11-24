import { Card, Row } from "react-bootstrap"
import { FaStar } from "react-icons/fa"

type UserItemProps = {
    id: number
    name:string
    price:number
    imgurl:string
}

export const UserItem = ({name, price, imgurl}: UserItemProps) => {
  return (
    <>
   
   
    <Row>
        
            
        <Card className ="h-100">
            
            <h2 className=" mb-4 text-center">Shopping </h2>

            <Card.Img
        variant="top"
        src={imgurl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
<span className="electronics"><FaStar/> <FaStar/> <FaStar/></span>

<Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            
          <span className="fs-2">{name}</span>
            <span className="ms-2 text-muted">${price}</span>
        </Card.Title>
        </Card.Body>
        </Card>
    </Row>
    </>
  )
}

export default UserItem