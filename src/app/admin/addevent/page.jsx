'use client'

import React from "react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { Box } from "@chakra-ui/react";




const addevent = () => {
    const [eventData, setEventData] = useState({
        Fullname: "",
        Description: "",
        
    });
   var logo;
   var coverimages = [];
    
    const logoUpload = (event) => {
        var file = event.target.files[0];
        //console.log(file)
        if(file){
        var reader = new FileReader();
        alert("UPLAODED")
        reader.onloadend = function () {
           
            
           logo=reader.result;
            console.log('Encoded Base 64 File String:', reader.result);
            
        };
        reader.readAsDataURL(file); }
       

    };
    const coverUpload = (event) => {
        var file = event.target.files[0];
        //console.log(file)
        if(file){
            alert("UPLAODED")
        var reader = new FileReader();
        reader.onloadend = function () {
           
            
          coverimages.push(reader.result);
            console.log('Encoded Base 64 File String:', reader.result);
            
        };
        reader.readAsDataURL(file); }
       

    };
    const handleChange = (event) => {

        setEventData({
            ...eventData,
            [event.target.name]: event.target.value
        })

    };
    const handleSubmit = (event) => {
        event.preventDefault();
         
        const finalData=({
            title: eventData.Fullname,
            description: eventData.Description,
            startDate: '2023-12-01T00:00:00Z',
            endDate: '2023-12-02T00:00:00Z',
            
            logoUrl: logo,
            coverImages: coverimages,

        });
        coverimages = [];
        const logFormData = (formData) => {
            for (let pair of formData.entries()) {
                console.log(pair[0], pair[1]);
            }
        };
        const formData = new FormData();
        formData.append('title', eventData.Fullname);
        console.log(eventData.Fullname);
        
        formData.append('description', eventData.Description);
        console.log(eventData.Description);
        formData.append('startDate', '2023-12-01T00:00:00Z');
        formData.append('endDate', '2023-12-02T00:00:00Z');
    
        // Append cover images
        coverimages.forEach((coverImage, index) => {
            formData.append(`coverImages[${index}]`, coverImage);
        });
    
        // Append logo image
        formData.append('logoImage', logo);
        logFormData(formData);


        //storing event details in local storage
       /* if(!localStorage.getItem("eventsArray")){
            var eventsArray = [];
            eventsArray.push(finalData);
            localStorage.setItem("eventsArray", JSON.stringify(eventsArray));
        }
        else{
            var eventsArray = JSON.parse(localStorage.getItem("eventsArray"));
            eventsArray.push(finalData);
            localStorage.setItem("eventsArray", JSON.stringify(eventsArray));
            
        }*/
        const createEvent = async (formData) => {

            try {
                
              const token = localStorage.getItem('token');
              console.log(token);
              const response = await fetch('http://localhost:4000/api/v1/admin/create', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${token}`,
                },
                body: formData,
              });
          
              if (!response.ok) {
                throw new Error('Failed to create event');
              }
          
              const responseData = await response.json();
              console.log('Event created successfully:', formData);
              // You can update your UI or perform other actions based on the response
            } catch (error) {
              console.error('Error creating event:', error.message);
              // Handle the error and provide feedback to the user
            }
          };
          
          // Example usage:
         
          
          createEvent(finalData);
    };
    return (

        <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
        <div class="min-h-screen flex items-center justify-center pt-12">
            <div class="container max-w-screen-lg mx-auto">
                <div>
                

                    <div class=" rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                            <div class="">
                                <p class="font-medium text-lg">Event Details</p>
                                
                            </div>

                            <div class="lg:col-span-2">
                                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                    <div class="md:col-span-5">
                                        <label for="full_name">Full Name</label>
                                        <input type="text" name="Fullname" id="full_name" class="h-10 border mt-1 rounded px-4 w-full text-black" value={eventData.Fullname} placeholder="Om Buddhadev" onChange={handleChange} />
                                    </div>

                                    <div class="md:col-span-5">
                                        <label for="email">Event Description</label>
                                        <input type="text" name="Description" id="email" class="h-10 border mt-1 rounded px-4 w-full text-black" value={eventData.Description}  onChange={handleChange} />
                                    </div>

                                    <div class="md:col-span-3">
                                        <label for="address">Cover Image</label>
                                        <input type="file" accept="image/*" class="h-10 border mt-1 rounded px-4 w-full text-black" onChange={coverUpload} />
                                    </div>
                                    <div class="md:col-span-3">
                                        <label for="address">Cover Image2</label>
                                        <input type="file" accept="image/*" class="h-10 border mt-1 rounded px-4 w-full text-black" onChange={coverUpload} />
                                    </div>
                                    <div class="md:col-span-3">
                                        <label for="address">Cover Image3</label>
                                        <input type="file" accept="image/*" class="h-10 border mt-1 rounded px-4 w-full text-black" onChange={coverUpload} />
                                    </div>

                                    <div class="md:col-span-3">
                                        <label for="address">Logo Image</label>
                                        <input type="file" accept="image/*" class="h-10 border mt-1 rounded px-4 w-full text-black" onChange={logoUpload} />
                                    </div>

                                  

                                   

                                    

                                    

                                    <div class="md:col-span-5 text-right">
                                        <div class="inline-flex items-end">
                                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>Submit</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div> 
        </Box>

    );
};

export default addevent;