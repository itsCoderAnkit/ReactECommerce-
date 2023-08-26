import Modal from "../UI/Modal";
import { Table } from "react-bootstrap";

const Cart = (props) => {

    const cartElements = [

        {

            title: 'Colors',

            price: 100,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

            quantity: 2,

        },

        {

            title: 'Black and white Colors',

            price: 50,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

            quantity: 3,

        },

        {

            title: 'Yellow and Black Colors',

            price: 70,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

            quantity: 1,

        }

    ]
    //const cartItems = cartElements.map((elem) =>( <li>{elem.title}</li>))

    const cartTable = (
        <tbody>
            {cartElements.map((elem, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{elem.title}</td>
                    <td>{elem.price}</td>
                    <td>{elem.quantity}</td>
                    <td><button>Cancel</button></td>
                </tr>
            ))}
        </tbody>
    )

    //     let mytable = <Table striped>
    //     <thead>
    //       <tr>
    //         <th>#</th>
    //         <th>Item</th>
    //         <th>Price </th>
    //         <th>Quantity</th>
    //       </tr>
    //     </thead>
    //     {cartTable}
    //   </Table>

    return (
        <Modal onClose={props.onClose}>
            <h1>Cart Items</h1>
            <Table borderless hover>
                <thead>
                    <tr>
                        <th>Qty.</th>
                        <th>Item</th>
                        <th>Price </th>
                        <th>Quantity</th>
                        <th>Cancel</th>
                    </tr>
                </thead>
                {cartTable}
            </Table>

            <div>
                <button onClick={props.onClose}> Close </button>
            </div>
        </Modal>
    )
}

export default Cart