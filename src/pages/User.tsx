import { Row,Col } from "react-bootstrap"
import userItems from "../data/item.json"
import {UserItem} from "../components/UserItem"


export const User = () => {
  return (
    <>
    <div className="user">User</div>
    <div className="col-md-2">
      <h2>rtrtrt</h2>
    </div>
    <Row md={2} xs={1} xl={3} className="g-3">
      {userItems.map(item => (
        <Col  key={item.id} className="col-md-6">
        <UserItem {...item}/>
        </Col>
      ))}
    </Row>
    </>
  )
}

export default User