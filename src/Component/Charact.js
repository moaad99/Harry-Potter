import React , {useState,useEffect} from 'react'
import Card from './Card'
import axios from "axios"
import {Link} from 'react-router-dom'
import './Charact.css'
export default function Charact() {

    const [char,setChar] = useState([])

    const getchar = ()=>{
        axios.get('http://hp-api.herokuapp.com/api/characters')
        .then(res =>{

            setChar(res.data)
        })
    }
useEffect(() => {
    getchar()
}, [])
    
    return (
        <div className="b">
,
<Link to="/"><img class="g" src="https://logo-marque.com/wp-content/uploads/2020/04/Harry-Potter-Logo.png" alt=""/>
</Link>
            <div className="search">
            

                <div className="inp">
                    <input placeholder='search character' type="text"/>
                </div>
                <div className="z">
                    <button type="button" class="bt btn-black">  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></button>
                </div>
            </div>
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
    )
}
