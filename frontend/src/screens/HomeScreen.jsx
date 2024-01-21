import { Row, Col } from 'react-bootstrap';
import products from '../products';
import Product from '../components/Product';

function HomeScreen() {
  return (
    <>
    <h1 style={{textAlign: "center"}}>Welcome to Desikalakar</h1>
    <h3>Latest Products</h3>
    <Row>
        {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
            </Col>
        ))}
    </Row>
    </>
  )
}

export default HomeScreen;
