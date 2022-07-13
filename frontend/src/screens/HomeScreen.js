import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { listProducts } from '../actions/productActions';
//import axios from 'axios'


const HomeScreen = () => {

  const dispatch = useDispatch();
  const productList = useSelector(state => state.productList)
  const { products } = productList




  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  //const products = []


  /*
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products')

      setProducts(data)
    }
    fetchProducts()
  }, [])
  */

  return (
    <>
      <h1>Productos</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product}></Product>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen