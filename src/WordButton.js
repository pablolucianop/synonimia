import React, { useState } from 'react';
import Badge from 'react-bootstrap/Badge'
import Card from 'react-bootstrap/Card'
import { useSpring, animated } from 'react-spring'

function Appo(props) {
  const propsi = useSpring({ 
    from: { opacity: 0 },
    to: { opacity: 1},
    config: { duration: 1000 }
  })
  const submitHandler2 = (evt) =>{
    evt.preventDefault();
    props.submitHandler([props.synCard])
  }

  const submitHandler22 =(evt) => {
    evt.preventDefault();
    props.eee(props.synCard)
  }

  
  return <animated.div   style={propsi}> {props.synCard} </animated.div>
}


export function WordButton (props)  {


  const submitHandler2 = (evt) =>{
    evt.preventDefault();
    props.submitHandler([props.synCard])
  }

  const submitHandler22 =(evt) => {
    evt.preventDefault();
    props.eee(props.synCard)
  }

    return (
      <div className="p-2">
        <Card type="button" className="btn btn-light" style={props} >
          
          <h5 ><div onClick={submitHandler2}> <Appo synCard={props.synCard} > hhe</Appo></div><div>{(props.eee !== undefined) ? <span className="badge text-muted" onClick={submitHandler22}>╳</span> : ''}</div></h5> 
        
                 </Card>
      </div>
    )
}