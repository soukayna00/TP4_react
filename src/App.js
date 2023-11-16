import axios from 'axios';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
function App() {
    const [meal, setMeal] = useState([]);

    useEffect(() => {
        axios
            .get('https://www.themealdb.com/api/json/v1/1/random.php')
            .then((result) => {
                setMeal(result.data.meals);
            })
            .catch((err) => {
                console.log('An error occurred: ', err);
            });
    }, []);
    return (
        <div className='container App'> {/* Apply container-fluid class here */}
            {meal.map((mealdata, index) => (
                <div className='meal_holder' key={index}>
                    <img className='image_meal' src={mealdata.strMealThumb} alt='Randommeal' />
                    <h1>{mealdata.strMeal} </h1>
                    <h3>
                        <i>{mealdata.strCategory}</i> Origin : {mealdata.strArea}
                    </h3>
                    <p>{mealdata.strInstructions}</p>
                </div>
            ))}
        </div>
    );
}

export default App;





