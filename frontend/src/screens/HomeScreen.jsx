import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { useGetProductsQuery } from '../slices/productsApiSlice';

function HomeScreen() {
const {data , isLoading, error} = useGetProductsQuery();

  return (
    <>
    {isLoading ? (
    <Loader />
    ) : error ? (
    <Message variant='danger'>{error?.data?.message || error.error
      }</Message>
      ):(<>
     <h1 style={{textAlign: "center"}}>Welcome to Desikalakar</h1>
     <h3>Latest Products</h3>
     <Row>
         {data.map((product) => (
             <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                 <Product product={product} />
             </Col>
         ))}
     </Row>
     </>)}
   
    </>
  )
}

export default HomeScreen;
