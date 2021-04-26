import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <div className="bod" >

            <img className="harr" src="https://logo-marque.com/wp-content/uploads/2020/04/Harry-Potter-Logo.png" alt=""/>
             <div className="all">
                 <div className="intro">
                        <h1 style={{fontFamily:"serif"}}>
                           <strong> Welcome to Harry Potter universe, 
the universe of the wizarding world   Where you will find all characters</strong> 
                        </h1>
<br/>
<Link style={{textDecoration:'none'}} to='/charact' >                        <button  type="button" className="btn btn-block btn-dark">View all caracters</button>
</Link>
                 </div>
                
             </div>
        </div>
    )
}
