'use client'

import React from "react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";




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
            name: eventData.Fullname,
            desc: eventData.Description,
            cover: coverimages,
            logo: logo,

        });
        coverimages = [];
        //storing event details in local storage
        if(!localStorage.getItem("eventsArray")){
            var eventsArray = [];
            eventsArray.push(finalData);
            localStorage.setItem("eventsArray", JSON.stringify(eventsArray));
        }
        else{
            var eventsArray = JSON.parse(localStorage.getItem("eventsArray"));
            eventsArray.push(finalData);
            localStorage.setItem("eventsArray", JSON.stringify(eventsArray));
            
        }
    };
    return (
        <div class="min-h-screen p-6 flex items-center justify-center">
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
    );
};

export default addevent;
