import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FoodCard = () => {
    const [meals, setMeals] = useState([]);
    const [progress, setProgress] = useState(0); 
    const  [timeChosse , setTimeChosse] = useState("") ;
    useEffect(() => {
        fetchMeals();
    }, [timeChosse]) ;

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        window.location.href = '/';
    }

    const fetchMeals = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/view/meals',{
                params: {
                    timechosse: timeChosse // Send selected time as query parameter
                }
            });
            setMeals(response.data);
        } catch (error) {
            console.error('Error fetching meals:', error);
        }
    };

    const handleProgressButtonClick = async (mealId) => {
        try {
            const userId = localStorage.getItem('userId');
        
            if (!userId) {
                console.error('No userId found in localStorage');
                return;
            }
    
            // Define or retrieve the value for timeChosse
           
            // Make a POST request to your backend API to register the vote
            const response = await axios.post('http://localhost:8000/api/votes', {
             
                userId: userId  ,
                mealId: mealId  ,
                timeChosse: timeChosse } 
            );
    
            console.log('Vote registered successfully:', response.data);
    
            // You might want to fetch the meals again after voting to reflect any changes in the UI
            fetchMeals();
        } catch (error) {
            console.error('Error voting:', error);
        }
    };
    ;

    const toggleDescription = (index) => {
        const newMeals = meals.map((meal, i) => {
            if (i === index) {
                return {
                    ...meal,
                    expanded: !meal.expanded 
                };
            }
            return meal;
        });
        setMeals(newMeals);
    };

    return (
        <div className='container'> 
            <div className="mt-5 mb-5">
                <h2 className='text-center'><em><b>Meals</b></em></h2>
                <div>
                <label for="options"><em><b>Choose a time:</b></em></label>
                <select className= "mb-1 mt-1 form-control" value={timeChosse}
                    onChange={(e) => setTimeChosse(e.target.value)} >
                    <option value="all" ><b><em>Choose a time </em></b></option>
                    <option value="breakfast"><em><b>breakfast </b></em></option>
                    <option value="lunch"><b><em>lunch</em></b></option>
                    <option value="Dinner"><b><em>Dinner</em></b></option>
                </select>
              </div>
                <div className="row">
                    {meals.map((meal, index) => (
                        <div className="col-md-4" key={meal.id}>
                            <div className="card mt-3">
                                <img src={`data:image/jpeg;base64,${meal.photo}`} className="card-img-top " style={{  height: '25vh', overflow: 'hidden' }} alt={meal.name} />
                                <div className="card-body" >
                                    <h5 className="card-title">{meal.name}</h5>
                                    {meal.expanded ? (
                                        <p className="card-text">{meal.description}</p>
                                    ) : (
                                        <p className="card-text">{meal.description.slice(0, 50)}...</p>
                                    )}
                                    <button className="btn btn-link" onClick={() => toggleDescription(index)}>
                                        {meal.expanded ? 'See less' : 'See more'}
                                    </button>
                                    <div className="progress " >
                                        <div
                                            className="progress-bar "
                                            
                                            role="progressbar"
                                            style={{ width: `${progress}%` }}
                                            aria-valuenow={progress}
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            {progress}%
                                        </div>
                                    </div>
                                    <button className="btn btn-primary mt-3 mb-5" onClick={() => handleProgressButtonClick(meal.id)}>
                                            <em><b>Vote</b></em>
                                    </button>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='text-center mt-5 mb-5'>
                <button className="btn btn-primary" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
    );
}

export default FoodCard;
