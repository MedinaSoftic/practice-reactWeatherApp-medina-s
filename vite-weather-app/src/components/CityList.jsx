import React from "react";
import { Link } from "react-router-dom"
import newYorkImg from './newyork.jpg'
import londonImg from './london.jpg'
import tokyoImg from './tokyo.jpeg'

export const weatherData = [
{id: 1,
 cityName: "NewYork",
 summary: "Sunny, 25°C",
 image: newYorkImg,
 details: "Clear skies throughout the day with mild temperatures."},
 {id: 2,
 cityName: "London", 
 image: londonImg,
 summary: "Cloudy, 18°C",
 details: "Overcast with occasional light rain in the afternoon."},
 {id: 3,
 cityName: "Tokyo",
 image: tokyoImg,
 summary: "Rainy, 22°C",
 details: "Continuous rain expected throughout the day."},
];


export default function CityList () {
    

    return(
        <>
        <h1>City Forecast! </h1>
            {weatherData.map(city =>
              <p key={city.id}><Link to={`/forecast/${city.cityName}`}>{city.cityName}</Link></p> 
            )}
            
        </>
    )
}