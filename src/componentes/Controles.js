import React from 'react'


function Controles(props) {
    return (
        <>
        <div className="plyr  ">    
                          
        <button className="btn  btn-lg btn-block m-1 ml-3" id="btn1" onClick={() => props.nextSong(false)} > <i className="fas fa-step-backward"></i> </button>          
              
        <button className="btn far  btn-lg btn-block m-1 " id="btn3" onClick={() => props.setIsPlaying(!props.isPlaying)} >  
        <i className= {props.isPlaying ?  "fas fa-pause" : "far fa-play-circle" }> </i>
        </button>                 
        
        <button className="btn fas fa-step-forward btn-lg btn-block m-1 ml-3" id="btn4" onClick={() => props.nextSong()}>  </button>
       
        </div>
        </>
    )
}

export default Controles
