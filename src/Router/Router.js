import MealDetails from "../Components/MealDetails/MealDetails";
import Meals from "../Components/Meals/Meals";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: '/',
        loader: async () => {
            return fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=c');
        },

        element: <Meals></Meals>
    },
    {
        path: '/meal/:mealid',
        loader: async ({ params }) => {
            return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealid}`);
        },
        element: <MealDetails></MealDetails>
    }

])