import React from 'react'
import {Card,Button,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../CSS/Cards.css'
const Cards = (props) => {
    const {name} = props
    return (
        <Col xs={12} sm={6} md={4} lg={3} xl={3}>
        <Card style={{ width: '100%',maxWidth:'300px'}} className="Card">
            <Card.Img variant="top" src={`https://img.pokemondb.net/sprites/bank/normal/${name}.png`} />
            <Card.Title className="cardTitle">{name}</Card.Title>
            <Card.Body>
                <Button variant="primary">
                <Link style={{color:'white'}} to={`/pokemon/${name}`}>View</Link>
                </Button>
            </Card.Body>
        </Card>
        </Col>
    )
}

export default Cards
