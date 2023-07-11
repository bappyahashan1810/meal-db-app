import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Meal = ({ meal }) => {

    const { idMeal, strCategory, strMealThumb, strTags } = meal;
    const navigation = useNavigate();
    const clickHandler = () => {
        navigation(`/meal/${idMeal}`);
    }
    return (
        <div>
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strCategory}</Card.Title>
                    <Card.Text>
                        {strTags}
                    </Card.Text>
                    <Button onClick={clickHandler} variant="primary">See More</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Meal;