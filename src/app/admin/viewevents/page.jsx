'use client'

import React from "react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { useState, useEffect } from "react";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
var eventData = [];

function Item(props)
{
    return (
        <Paper>
            <div className="flex justify-center">
            <img src={props.src} className="h-20"></img>
            </div>
            
        </Paper>
    )
}
  




const viewevents = () => {
  var items = [
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!"
    },
    {
        name: "Random Name #2",
        description: "Hello World!"
    }
]
  const [dataLoaded, setDataLoaded] = useState(false);
  useEffect(() => {
    // Check if window is defined to ensure it's on the client side
    if (typeof window !== 'undefined') {
      // Access localStorage here
       eventData = JSON.parse(localStorage.getItem('eventsArray'));
       console.log(eventData)
      // ...
      setDataLoaded(true);
    }
  }, []);
  if (!dataLoaded) {
    return <div>Loading...</div>; // or any loading indicator
  }

  return(
    
  eventData.map((item,i)=> <div className="ml-4 mr-4">
  <div className="flex flex-grow items-center	">
    <h1>{i}. {item.name}</h1>
    <img src={item.logo} className="w-10 ml-4"></img>
  </div>
  <div>
    <p className="text-sm">{item.desc}</p>
  </div>
  
  
  <Carousel>
  {
      item.cover.map( (img, j) => <Item src={img} /> )
  }
</Carousel><br></br></div>)

  )


}
export default viewevents;