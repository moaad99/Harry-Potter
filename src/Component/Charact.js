import React , {useState,useEffect} from 'react'
import Card from './Card'
import axios from "axios"
import {Link} from 'react-router-dom'
import './Charact.css'
export default function Charact() {

    const [char,setChar] = useState([])

    const getchar = ()=>{
        axios.get('http://hp-api.herokuapp.com/api/characters?name=h')
        .then(res =>{

            setChar(res.data)
        })
    }

   
useEffect(() => {
    getchar()

}, [])
    
    return (
        <div>
            
        <div className="b">
,
<Link to="/"><img class="g" src="https://logo-marque.com/wp-content/uploads/2020/04/Harry-Potter-Logo.png" alt=""/>
</Link>
        
         
            <br/> <div className="container">
            <div className="row row-cols-1 row-cols-md-2 g-4">
  
  {char.map((c,i)=>(
      <div key={i} className="col">
  <Card  char={c}  />
  </div>
  ))}
  
  </div>
            </div>
          


        <br/>
        </div>
        </div>
    )
}
