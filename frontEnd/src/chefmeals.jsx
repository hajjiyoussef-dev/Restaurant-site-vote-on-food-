import React, { useState ,useEffect} from 'react';

import axios from 'axios';



const Chefmeals = () => {
    const [meals, setMeals] = useState([]);
    const [mealName, setMealName] = useState(''); 
    const [mealDescription, setMealDescription] = useState('');
    const [mealPhoto, setMealPhoto] = useState(null);
    const [errorMessage , setErrorMessage] = useState('');
    const [successMessage , setSuccessMessage] = useState('');
    const [timeChosse , setTimeChosse] = useState(null) ;
  
    useEffect(() => {
      fetchMeals();
    },[])

  const handleMealNameChange = (s) => {
    setMealName(s.target.value);
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    window.location.href = '/cheflogin';
  }

  const handleMealDescriptionChange = (p) => {
    setMealDescription(p.target.value);
  };

const handleMealPhotoChange = (e) => {
    setMealPhoto(e.target.files[0])
 };

 const fetchMeals = async () => {
  try {
      const response = await axios.get('http://localhost:8000/api/view/meals');
      setMeals(response.data);
  } catch (error) {
      console.error('Error fetching meals:', error);
  }
};

 const handleAddMeal = async (e) => {
  e.preventDefault();

  if (mealName && mealDescription && mealPhoto && timeChosse) {
      try {
          const formData = new FormData();
          formData.append('name', mealName);
          formData.append('description', mealDescription);
          formData.append('timechosse', timeChosse); 
          formData.append('photo', mealPhoto); 
          
          const response = await axios.post('http://localhost:8000/api/chef/meals', formData, {
              headers: {
                  'Content-Type': 'multipart/form-data',
              },
          });
          setMealDescription('');
          setMealName('');
          setMealPhoto('');
          setTimeChosse('');
          console.log(response.data.message)
          alert('Meal added successfully');
          fetchMeals(); 
      } catch (error) {
          console.error('Error adding meal:', error);
          setErrorMessage('Error adding meal. Please try again.');
      }

      // Clear input fields
      setMealName('');
      setMealDescription('');
      setMealPhoto(null);
  } else {
      setErrorMessage('Please fill in all fields.');
      setErrorMessage('')
  }
};


const handleDeleteMeal = async (id) => {
  try {
      await axios.delete(`http://localhost:8000/api/meals/${id}`);
      alert('Meal deleted successfully');
      setSuccessMessage('');
      fetchMeals(); 
  } catch (error) {
      console.error(error);
      setErrorMessage('Error deleting meal. Please try again.');
  }
};

  return (
    <div className="container mt-5   ">
      <h1 className="mb-4 text-center"><em><b>Chef Meals</b></em></h1>
      <div className="row ">
        <div className="">
          <div className="card">
            <div className="card-body " >
              <h5 className="card-title text-center"><em><b>Add New Meal</b></em></h5>
              <div className="form-group">
                <label className='mb-1'><em><b>Name:</b></em></label>
                <input
                  type="text"
                  className="form-control "
                  value={mealName}
                  onChange={handleMealNameChange}
                />
              </div>
              <div className="form-group">
                <label className='mb-1 mt-1'><em><b>Description:</b></em></label>
                <input
                  type="text"
                  className="form-control"
                  value={mealDescription}
                  onChange={handleMealDescriptionChange}
                />
              </div>
              <div className="form-group">
              <label for="options"><em><b>Choose a time:</b></em></label>
                <select className= "mb-1 mt-1 form-control" value={timeChosse}
                onChange={(e) => setTimeChosse(e.target.value)} >
           
                  <option value="" >Choose a time </option>
                  <option value="breakfast"><em><b>breakfast </b></em></option>
                  <option value="lunch">lunch</option>
                  <option value="Dinner">Dinner</option>
                </select>
              </div>
             
              <div class="input-group mt-3 mb-3">
                    <input 
                        type="file" 
                        className="form-control" 
                        onChange={handleMealPhotoChange}
                        
                        id="inputGroupFile01"
                    />
                </div>
                <div className='text-center'> 
                  <button
                        className="btn btn-primary btn-block form-control "
                        onClick={handleAddMeal}
                        >
                     <em>Add Meal</em>
                  </button></div>
             
              {/* {mealPhoto&&<div>{mealPhoto}</div>} */}
            </div>
            {errorMessage && <div className="text-danger mt-4 text-center"><em><b>{errorMessage}</b></em></div>}
           {successMessage && <div className="text-success mt-4 text-center"><em><b>{successMessage}</b></em></div>}
          </div>
        </div>
        <div className="mt-5 mb-5">
                <h2>Meals</h2>
                <div className="row">
                    {meals.map((meal) => (
                        <div className="col-md-4" key={meal.id}>
                            <div className="card mt-3">
                                <img src={`data:image/jpeg;base64,${meal.photo}`} className="card-img-top " style={{  height: '25vh', overflow: 'hidden' }}  alt={meal.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{meal.name}</h5>
                                    <p className="card-text">{meal.description}</p>
                                    
                                    <button className="btn btn-danger mt-3" onClick={() => handleDeleteMeal(meal.id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
      </div>
      <div className='text-center mt-5 mb-5'>
        <button className="btn btn-primary" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Chefmeals;
