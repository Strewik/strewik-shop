import React from 'react'
import { Row, Col} from 'react-bootstrap'

import products from '../products'

const HomeScreen = () => {
  return (
    <div>
        <h1>Latest Products</h1>
        <Row>
            {products.map(product => (
                <Col>
                </Col>
            ))}
        </Row>
    </div>
  )
}

export default HomeScreen