import { Col, Container,Row } from 'react-bootstrap';
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

    

   let products =  productsArr.map((prod) =>(
    
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
           
                
        <h3>Products List</h3>
       
        {/* <Row className="mb-6">{products}</Row> */}
        <Row className="mb-2">{products}</Row> 
       
       <h1>heu</h1>

       </Container>
    </div>

    )
}

export default Products
