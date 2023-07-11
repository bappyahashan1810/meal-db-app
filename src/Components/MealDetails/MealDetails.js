import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MealDetails = () => {
    const meal = useLoaderData();
    const { strMealThumb, strCategory } = meal.meals[0];
    console.log(meal);
    return (
        <div>
            <img src={strMealThumb} alt="" />
            <p>{strCategory}</p>
        </div>
    );
};

export default MealDetails;