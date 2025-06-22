// Home.js
    //For the weather
import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import './Home.css'
import './Weather.css'
import Footer from "./Footer";



function Home() {
    
    
const navigate= useNavigate()
    const [datas, setData]= useState({})
    const [cityName, setCityName] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [dataLoading, setDataLoading]    = useState(false)
    
    const location= useNavigate();
    


    function goToHome(){
        location('/')
    }
    function goToAbout(){
        location('/about')
    }

    function goToCalc(){
        location('/calc')
    }

    //const img= 'https://openweathermap.org/img/wn/10d@2x.png'

    function goHome(){
        navigate('/')
    }
    
    
    function inputNum(e){
        const input = e.target.value
        setCityName(input)
    }

    
    
    
    const apiKey= '0a60008fc7698760688ffc4c5a9312d7'
    

    const fetchData=async (city) => {
        try {

            const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            const data= await response.json()


            if(response.ok){
                setData(data)
                setDataLoading(true)
                setErrorMessage('')

            }else{
                console.error('City not found or Api error:', data.message)
                setErrorMessage('City not found')
                setDataLoading(false)
            }
            
        } catch (error) {
            console.error('Failed to fetch')
            setData({})
            setErrorMessage('An error occurred while fetching data ')
            setDataLoading(false)
        }

    }

    function searchCity(){
        if(!cityName.trim()){
            setErrorMessage('Enter a City Name')
            return;
        } 
        fetchData(cityName)
    }

    function handleKeyDown(e){
        if(e.key==='Enter'){
            searchCity()
        }
    }


const hPaToMmHg = (hPa) => (hPa * 0.75006).toFixed(2)



    return <> 
    <div className="headings">
            <h2>Check Weather!</h2>
            <nav>
                <ul className="links">
                    <li onClick={goToHome}>Weather</li>
                    <li onClick={goToAbout}>GameZone</li>
                    <li onClick={goToCalc}>Calculator</li>

                </ul>
            </nav>
    </div>
    <div className='container--1'>
        
        <div className='big-box'>

                <div className='search-bar'>
                    <input type='text' placeholder='enter city' className='text-bar' onChange={inputNum} onKeyDown={handleKeyDown}></input>
                    
                    {/* Error Message */}
                    {errorMessage && <p className='error'>{errorMessage}</p>}  

                    <div className='heading'>
                        <button className='search' onClick={searchCity}>Search</button>            
                        <p className='city-text'>Country/City: {datas?.name ||'..loading' }</p>
                        

                    </div>
                </div>
                
                {dataLoading && (<>

                    <div className='weathers'>
                    <p className='main'>Weather </p>
                    <div className='circle'>
                        <img src={`https://openweathermap.org/img/wn/${datas.weather[0].icon}@2x.png`} alt='Images' />
                    </div>
                    {/* <p className='describe'>{datas?.weather?.[0]?.description || '...loading'}</p> */}
                    <p className='describe'>{(datas?.weather?.[0]?.description).replace((datas?.weather?.[0]?.description)[0], (datas?.weather?.[0]?.description)[0].toUpperCase() ) || '...loading'}</p>
                </div>


                <div className='direction'>
                <p className='long'>Longitude: {datas?.coord?.lon || '...loading'}</p> 
                <p className='lat'>Latitude: {datas?.coord?.lat || '...loading'}</p> 
                </div>

                <div className='both'>
                    <div className='temp'>
                        <h3>Temperature 🌡️</h3>
                        
                        <div className= 'temp-box'>
                            <p className={`${datas?.main?.temp ? 'temp-text' : null }`}>
                                {/* {`${datas?.main?.temp || '...loading'} °C `} */}
                                {datas?.main?.temp ? `${datas.main.temp}°C` : 'loading...'}
                            </p>
                        </div>

                        <div className='max-min'>
                            <div className='max'>
                                <p>Max-Temp</p> 
                                {/* <p>{`${datas?.main?.temp_max || '...loading'} °C `}</p> */}
                                <p>{datas?.main?.temp_max ? `${datas.main.temp_max}°C` : 'loading...'}</p>
                            </div>
                            
                            <div className='min'>
                                <p>Min-Temp</p>
                                {/* <p> {`${datas?.main?.temp_min || '...loading'} °C `}</p> */}
                                <p> { datas?.main?.temp_min ?`${datas.main.temp_min}°C` : 'loading...'}</p>
                            </div>
                        </div>
                    </div>

                    <div className='pressure'>
                        <h3>Pressure ⚖️</h3>
                        <div className='pressure-box'>
                            <p className={`${datas?.main?.pressure ? 'pressure-text' :null }`} >{datas?.main?.pressure ? `${hPaToMmHg(datas.main.pressure)}mmHg`:'loading...' }</p>
                        </div>
                        <p className='country-text'>Country: {datas?.sys?.country ||'..loading' }</p>
                    </div>

                </div>


                </> 
                )}
                

        </div>
        
        <button className='goHome' onClick={goHome}>Home</button>        
        <Footer />

    </div>
    
    </>
  }
  
  export default Home;
  
