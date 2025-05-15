import React from "react";
import { weatherData } from "./CityList";
import { Link, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function CityForecast () {

    const {cityName} =useParams();
    const detailRef =useRef(null);
    const [cityWeather, setCityWeather]=useState(null);

    useEffect(() => {
        const cityWeather = weatherData.find(city => city.cityName== cityName);
            setCityWeather(cityWeather || null);
            }, [cityName]);

    const handleScrollClick = () => {
       if (detailRef.current){
            detailRef.current.scrollIntoView({behavior: "smooth"});
            }
        };


    if (!cityWeather) { 
        return(            
        <>
            <p>Loading...</p>
            <Link to="/">Return to Home</Link>
        </>
        )
    }
    

    return(
        <>
        <div>
            <h1>Forecast For {cityWeather.cityName}</h1>
                <h2>{cityWeather.summary}</h2>
                <br/>
                    <button onClick={handleScrollClick}>View Details</button>
                    <br/>
                    <br/>
                        <div ref={detailRef}>
                        <img src={cityWeather.image} alt={cityWeather.cityName}></img>
                        <p>{cityWeather.details}</p>
                        </div>
            <Link to="/"><button>Return To Home</button></Link>
        </div>
        </>
    )
};
