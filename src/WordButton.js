import React, { useState } from 'react';
import Badge from 'react-bootstrap/Badge'
import Card from 'react-bootstrap/Card'
import { useSpring, animated } from 'react-spring'

function Appo() {
  const props = useSpring({ 
    
    // loop: { reverse: true },
    from: { opacity: 0 },
    to: { opacity: 1},
    config: { duration: 1000 }
  })
  return <animated.div   style={props}>  hhh     </animated.div>
}


export function WordButton (props)  {

  const [wBState, setwBState] = useState(
    {
      picked2: '',
      unPicked2: '',
    }
  );

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
        <Card type="button" className="btn btn-light"  >
          <Appo > hhe</Appo>
          <h5 ><div onClick={submitHandler2}>{props.synCard}</div><div>{(props.eee !== undefined) ? <span className="badge text-muted" onClick={submitHandler22}>╳</span> : ''}</div></h5> 
        
                 </Card>
      </div>
    )
}