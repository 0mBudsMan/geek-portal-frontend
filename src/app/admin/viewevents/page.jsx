'use client'
import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import { useEffect } from 'react';
import { Image } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react';

var eventData = [];

export default function viewevents() {

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);


  /*THIS WILL HAVE TO BE CHANGED ONCE DATABASE ACCESS IS RECIEVED*/
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
  if(!eventData){
    return (
      <div>
        <img src="https://imageio.forbes.com/blogs-images/zarastone/files/2017/05/21Amazon-Barkley-404.jpg?height=711&width=711&fit=bounds"></img>
      </div>
    )
  }
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }} >
    {eventData.map((item,i)=>
    
    <div style={{paddingTop: 20}}>
    <div style={{display: "flex", margin: "auto"}}>
    <h1>{i+1}. {item.name}</h1>
    <Image
    boxSize='80px'
    objectFit='cover'
    src={item.logo}
    alt='Dan Abramov'
  />
  </div>
  <div>
    <p className="text-sm">{item.desc}</p>
  </div>
    <div >
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 2,
            itemsToScroll: 2,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {item.cover.map((img,j)=><div style={{ width: 300, height: 325,  }}>
        <Image
    boxSize='300px'
    
    src={img}
    alt='Dan Abramov'
  /><p>Image {j+1}</p></div>
  )}
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        
        
      </ReactSimplyCarousel>
    </div></div>
    )}
    </Box>
  );
}
