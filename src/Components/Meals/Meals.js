import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from '../Meal/Meal';

const Meals = () => {
    const loadMeals = useLoaderData();
    const { meals } = loadMeals;

    return (
        <div>
            <h3>WelCome To Darling Restaurant</h3>
            <div className='md:grid grid-cols-3 mt-3 gap-3'>
                {
                    meals.map(meal => <Meal
                        key={meal.idMeal}
                        meal={meal}
                    ></Meal>)
                }
            </div>
        </div>
    );
};

export default Meals;