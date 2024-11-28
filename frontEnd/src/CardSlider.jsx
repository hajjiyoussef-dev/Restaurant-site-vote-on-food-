import React, { useState } from "react";
import "./CardSlider.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css';
const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const checkNext = () => {
    const labels = document.querySelectorAll('#slider label');
    const nextIndex = selectedIndex === (labels.length - 1) ? 0 : selectedIndex + 1; 
    setSelectedIndex(nextIndex);
  }

  const check = index => setSelectedIndex(index);

  return (
    <div>
      <div className="  container-S border bg-black mt-3 container  rounded-top border-bottom border-black flex">
      {/* <span className="p-13"><em>1337Food</em></span> */}
        <div className="  ">
          
            <div className="">
                <button className=" btn" onClick={checkNext}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi-S bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z">
                    </path>
                  </svg>
                </button>
            </div>
            
        </div>
        <div className="text-center-S">
       
          <section
            id="slider"
            className="w-16 text-center ml-5 h-20 mt-3 ml-5 mr-5 mb-3 flex-shrink-0"
          >
             
             
         
            <input
              type="radio"
              name="slider"
              id="s1"
              checked={selectedIndex === 0}
              onClick={() => check(0)}
            />
            <input 
              type="radio" 
              name="slider" 
              id="s2" 
              checked={selectedIndex === 1}
              onClick={() => check(1)}
            />
            <input
              type="radio"
              name="slider"
              id="s3"
              checked={selectedIndex === 2}
              onClick={() => check(2)}
            />
            <label htmlFor="s1" id="slide1">
            <p className="p-S"><em><b>Healthy food & <b>Vote now</b> </b></em> </p>
              <img className="fea rounded" 
                src="https://cdn.pixabay.com/photo/2023/09/25/07/55/salad-8274421_640.jpg" 
                height="100%" width="100%" />
            </label>
            <label htmlFor="s2" id="slide2">
              <p className="p-S"><em><b>Diverse and delicious food </b></em> </p>
              <img className="fea rounded border-black" 
              src="https://img.freepik.com/free-photo/sandwich-with-chopped-meat-side-fries_141793-363.jpg?w=360&t=st=1711337001~exp=1711337601~hmac=3e51bb9a639964c50b190dd5e339214046fe02b4b49139dd8e2e96774f255a33" height="100%" width="100%"/>
            </label>
            <label htmlFor="s3" id="slide3">
            <p className="p-S"><em><b>Natural fruits &  <b>Vote now</b></b></em> </p>
              <img className="fea rounded" 
              src="https://cdn.pixabay.com/photo/2015/02/13/00/43/apples-634572_1280.jpg" height="100%" width="100%"/>
            </label>
          </section>
        </div>
        <div className="">
          <div className="">
            <button onClick={checkNext} className="btn"><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class=" bi-S bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
