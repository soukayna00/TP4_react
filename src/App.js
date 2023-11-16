


//    generate random  meals 

import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css'

function App() {
    const [meal, setMeal] = useState([]);

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
            .then((result) => {
                setMeal(result.data.meals);
            })
            .catch((err) => {
                console.log('An error occurred: ', err);
            });
    }, []);

    return (
        <div className='App'>
            {meal.map((mealdata, index) => (
                <div className='meal_holder' key={index}>
                    <img src={mealdata.strMealThumb} alt='Randommeal' style={{ height: '200px', width: '450px',borderRadius:'40px'}} />
                    <h1>{mealdata.strMeal} </h1>
                <h3><i>{mealdata.strCategory}</i>  Origin : {mealdata.strArea}</h3>
                    <p>{mealdata.strInstructions}</p>
                </div>
            ))}
        </div>
    );
}

export default App;



//___________tp de pagination 

// import axios from 'axios';
// import { useEffect } from 'react';
// import { useState } from 'react';
// import './App.css'

// function Api(){
//   const [todo, settodo] = useState([]);
//   const [page,setpage]=useState(1)

//   useEffect(() => {
//     axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`)
//       .then(result=>settodo(result.data))
//       .catch(error=>console.error(error))
//   },[page])

//   const handlePrevious=()=>{
//     if (page>1){
//       setpage(page-1)
//     }
//   }
//   const handleNext=()=>{
//      setpage(page+1)
//   }
// return(
//     <div className="App">
//       {todo.map((elemt,index)=>(
//         <div className='holder' key={index}>
//           <h2>Id {elemt.id}</h2>
//           <h2>Title {elemt.title}</h2>
//         </div>
//       ))}
//      <button onClick={handlePrevious}>previous</button>
//      <button onClick={handleNext}>next</button>
//     </div>
// ) 
// }
// export default Api




