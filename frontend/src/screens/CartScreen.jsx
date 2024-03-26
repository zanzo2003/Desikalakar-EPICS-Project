import {Link, useNavigate} from "react-router-dom";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import {Row, Col, ListGroup, Image, Form, Button, Card} from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import Message from "../components/Message"
import { addToCart, removeFromCart } from "../slices/cartSlice";

const CartScreen = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const addToCartHandler = async(product, qty)=>{
        dispatch(addToCart({...product, qty}));
    };

    const removeFromCartHandler = async(id)=>{
        dispatch(removeFromCart(id));
    };

    const checkoutHandler = () =>{
        navigate('/login?redirect=/shipping');
    };

    return(
    <Row>
        <Col md ={8}>
            <h1 style={{marginBottom: '20px'}}>Shopping Cart</h1>
            <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
            {cartItems.length === 0 ? (
                <Message>
                    Your Cart Is Empty 🥲 <br/> <Link to='/'>Go Back</Link>
                </Message>
            ) : (
                <ListGroup variant="flush">
                    {cartItems.map((item)=>(
                        <ListGroup.Item key={item._id}>
                            <Row>
                                <Col md = {2}>
                                    <Image src = {item.img} alt ={item.name} fluid rounded/>
                                </Col>
                                <Col md = {3}>
                                    <Link to={`/product/${item._id}`}>{item.name}</Link>
                                </Col>
                                <Col md= {2}>
                                    Rs {item.price}
                                </Col>
                                <Col md= {2}>
                                <Form.Control
                            as='select'
                            value={item.qty}
                            onChange={(e) => addToCartHandler(item, Number(e.target.value))}
                          >
                            {[...Array(item.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
                                </Col>
                                <Col md = {2}>
                                    <Button type="button" variant="light" onClick={()=> removeFromCartHandler(item._id)}>
                                        <FaTrash/>
                                    </Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}
        </Col>
        <Col md ={3}>
            <Card>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h3>
                            Subtotal ({cartItems.reduce((acc, item) => acc+item.qty, 0)}) Items
                        </h3>
                        Rs{cartItems.reduce((acc, item)=> acc+item.qty * item.price, 0).toFixed
                        (2)}
                    </ListGroup.Item>
                </ListGroup>
                <ListGroup.Item>
                    <Button type="button" className="btn-block" disabled={cartItems.length ===0}
                    onClick={checkoutHandler}>
                        Proceed To Checkout
                    </Button>
                </ListGroup.Item>
            </Card>
        </Col>
    </Row>
    );
};

export default CartScreen;