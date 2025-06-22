import React, { useState } from 'react'
import './Calc.css'
//import Btn from './Button'
import { useNavigate } from 'react-router-dom'
import { evaluate } from 'mathjs'
import Footer from './Footer'


const Calc = () => {
    

    const[numArray, setArray]= useState([])
    const [currentNumber, setNumber]= useState([''])
    const [total, setTotal] = useState(0);


    const homeReturn= useNavigate()

    function goBackHome(){
        homeReturn('/')
    }


    function goBackAbout(){
        homeReturn('/About')
    }


    
    function addNumber(no){
        //setNumber((pre)=> pre + no )
        setNumber((pre)=> [...pre + no] )

        setArray((preNo)=>[...preNo, no])

    }

// console.log(currentNumber)
// console.log(currentNumber.join('').replaceAll(',', ''))
// //console.log(currentNumber.join(''))
// console.log(numArray.join(' ').replaceAll(' ', ''))


        function deleteNum(){
            setNumber((preNum)=>preNum.filter((_,index)=>index!==preNum.length-1)) 
            setArray((preArray)=>preArray.filter((_,index)=>index!==preArray.length-1)) 
        }

    

    function equalTo(){
        try {
            const openArray=currentNumber.join('').replaceAll(',','')
            
            const answer= evaluate(openArray)
            //const answer= evaluate(currentNumber)
            
            setTotal(answer)
        } catch (error) {
            setTotal('Error')
        }
    }

    function restart(){
        setArray([])
        setNumber([''])
        setTotal(0)
    }


  return ( <>
        <h1 className='title-calc'>Mini Calculator</h1>
       
        <div className="bigger-box-home">
        
            <div className='display-screen'>
                <h3 className='display-txt'>{numArray.join('')}</h3>
                <h2 className='big-display-txt'>{total}</h2>
            </div>

            <div className='grid-numbers'>
                <div>
                    <h2 onClick={()=> addNumber('1')}>1</h2>
                </div>

                <div>
                    <h2 onClick={()=> addNumber('2')}>2</h2>
                </div>

                <div>
                    <h2 onClick={()=> addNumber('3')}>3</h2>
                </div>

                <div>
                    <h2 onClick={()=> addNumber('4')}>4</h2>
                </div>
                
                <div>
                    <h2 onClick={()=> addNumber('5')}>5</h2>
                </div>

                <div>
                    <h2 onClick={()=> addNumber('6')}>6</h2>
                </div>

                <div>
                    <h2 onClick={()=> addNumber('7')}>7</h2>
                </div>

                <div>
                    <h2 onClick={()=> addNumber('8')}>8</h2>
                </div>

                <div>
                    <h2 onClick={()=> addNumber('9')}>9</h2>
                </div>

                <div>
                    <h2 onClick={()=> addNumber('0')}>0</h2>
                </div>

                <div>
                    <h2 onClick={()=>addNumber('+')}>+</h2>
                </div>

                <div>
                    <h2 onClick={()=>addNumber('-')}>-</h2>
                </div>

                <div>
                    <h2 onClick={()=>addNumber('*')}>×</h2>
                </div>
                
                <div>
                    <h2 onClick={()=>addNumber('/')}>/</h2>
                </div>
                
                <div>
                    <h2 onClick={equalTo}>=</h2>
                </div>

                <button className='btn-calc' onClick={restart}>Start</button>
                
                <div>
                    <p className='back-space' onClick={deleteNum}>&rarr;</p>
                </div>
                <button className='btn-calc odd'>Off</button>

            </div>

        </div>
        <div className='btn-allCalc'>
            <button className='btn-calc right-btn' onClick={goBackHome}>Home</button>
            <button className='btn-calc left-btn' onClick={goBackAbout}>About</button>
        </div>

        <Footer />
    </>
  )
}

export default Calc


    