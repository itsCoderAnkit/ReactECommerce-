import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

const Products = () => {

    const productsArr = [

        {

            title: 'Colors',

            price: 100,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

        },

        {

            title: 'Black and white Colors',

            price: 50,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

        },

        {

            title: 'Yellow and Black Colors',

            price: 70,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

        },

        {

            title: 'Blue Colors',

            price: 100,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

        }

    ]



    let products = productsArr.map((prod) => (

        <Col md={6}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={prod.imageUrl} />
                <Card.Body>
                    <Card.Title>{prod.title}</Card.Title>
                    <Card.Text>
                        {prod.price}
                    </Card.Text>
                    <Button variant="primary">Buy Now</Button>
                </Card.Body>
            </Card>
        </Col>


    ))

    return (<div>
        <Container className="mt-6">

            <Row>
                <Col className="text-center mb-4"> {/* Center-align the heading */}
                    <h3>Products List</h3>
                </Col>
            </Row>

            <Row className="d-flex justify-content-center mb-2 mt-4">{products}</Row>

        </Container>
    </div>
    )
}

export default Products
