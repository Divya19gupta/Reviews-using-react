import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setIndex]=useState(0);
  const{name,job,image,text} = people[index];

  const nextPerson=()=>{
    setIndex((i)=>{
      let newIndex = i+1;
      if(newIndex<people.length-1)
      return newIndex;
      else
      return 0;
    })
  }
  const prevPerson=()=>{
    setIndex((i)=>{
      let newIndex = i-1;
      if(newIndex>0)
      return newIndex;
      else 
      return people.length-1;
    })
  }
  const randomPerson =()=>{
    let rand = Math.floor((Math.random()* people.length));
    setIndex((i)=>{
      i = rand;
      return i;
    })
  }
  return(
    <article  className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img"/>
          <span className="qoute-icon">
            <FaQuoteRight/>
          </span>
        </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft/>
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight/>
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>Surprise Me</button>
    </article>
  );
};

export default Review;
