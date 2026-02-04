import React from 'react'
import {Rnd} from "react-rnd"

const Window = ({children , height , width , x , y}) => {
  return (
    <Rnd
    default = {{
        x : x ,
        y:y , 
        width : width, 
        height: height
    }}
    

     cancel="button, .btn"
    >

      {children}
      
        
    </Rnd>
  )
}

export default Window