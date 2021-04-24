import React from 'react'
import "./Card.css"

export default function Card({char}) {
    return (
        <div>
            <div  style={{width:"600px",marginInline:"10px"}} className="card">
                <div className="al">
                    <div className="im">
                    <img
        src={char.image}
        class="card-img-top"
        alt="..."
        style={{height:"300px",width:"300px"}}
      />
                    </div>
                    <div className="cbo">
                    <div class="card-body">
    <strong>     <h5 style={{color:"black",fontSize:"28px"}} class="card-title">{char.name}</h5></strong>
       <br/>
        <p class="card-text">
          <ul>
              <li>
               <strong>birdthday :</strong>    {char.dateOfBirth}
              </li>
              <br/>
              <li>
              <strong> gender :</strong>    {char.gender}
              </li><br/>
              <li>
               <strong> actor :</strong>    {char.actor}
              </li><br/>
              <li>
                <strong>  hair color :</strong>   {char.hairColour}
              </li>
          </ul>
        </p>
      </div>
                    </div>
                </div>
     
    
    </div>
        </div>
    )
}
