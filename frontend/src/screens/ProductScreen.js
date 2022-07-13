import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'
//import { useDispatch, useSelector } from 'react-redux';
//import { listProductDetails } from '../actions/productActions'


const ProductScreen = ({ }) => {
  const [qty, setQty] = useState(0)
  const { id } = useParams();
  const [product, setProduct] = useState({})


  useEffect(() => {

    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`)

      setProduct(data)
    }

    fetchProduct()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Link className='btn btn-dark my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid></Image>
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} Reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Precio: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Descripción: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Precio:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Disponibilidad:</Col>
                  <Col>
                    {product.countInStock > 0 ? 'En Stock' : 'Fuera de Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>

              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Cantidad</Col>
                    <Col>
                      <Form.Control
                        as='select'
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                      >
                        {[...Array(product.countInStock).keys()].map(
                          (x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          )
                        )}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}

              <ListGroup.Item>
                <Button onClick={console.log(`Quiere guardar ${qty} en su carrito`)} className="btn-block" type='button' disabled={product.countInStock === 0}>
                  Agregar
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen