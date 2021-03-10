import React, { useState } from 'react';

const Question = ({title, info}) => {
  const [showInfo, setShowInfo] = useState(false);
  return(
    <article className="question">
       <header>
         <h4>{title}</h4>
         <button onClick={()=> setShowInfo(!showInfo)} className="btn">{showInfo?<ion-icon className="ion-btn" name="close-circle-outline"></ion-icon>:<ion-icon className="ion-btn" name="add-circle-outline"></ion-icon>}</button>
       </header>
       {showInfo && <p>{info}</p>}
    </article>
  )
};

export default Question;
