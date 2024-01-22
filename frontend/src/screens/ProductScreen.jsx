import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import Rating from "../components/Rating";
import axios from 'axios';

const ProductScreen = () => {
  const [product, setProducts] = useState({});
  const { id: productId } = useParams();
  
  useEffect(() => {
    const fetchProducts = async()=>{
      const { data } = await axios.get(`/api/products/${productId}`);
      setProducts(data);
    };
    fetchProducts();
    console.log(product);

  }, [productId]);

  return (
    <> 
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>

      <Row style={{ fontFamily: "'Philosopher', sans-serif" }}>
        <Col md={5}>
          <Image src={product.img} alt={product.name} fluid />
        </Col>

        <Col md={4}>
          <ListGroup variant="flush" className="product-details">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReview} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ₹{product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant="flush" className="product-details">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>₹{product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
