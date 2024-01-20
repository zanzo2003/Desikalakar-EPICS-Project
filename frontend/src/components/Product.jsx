import { Card } from "react-bootstrap";
import React from "react";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${Product._id}`}>
        <Card.Img src={product.img} variant="top" />
      </a>

      <Card.Body>

        <a href={`/product/${product._id}`}>
          <Card.Title as="div" className="product-title">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>

        <Card.Text as='h3'>₹{product.price}</Card.Text>

      </Card.Body>
    </Card>
  );
};

export default Product;
