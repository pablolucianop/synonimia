import React from 'react'
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

export class WordButton extends React.Component {
  constructor() {
    super();
    this.submitHandler2 = this.submitHandler2.bind(this);
    this.submitHandler22 = this.submitHandler22.bind(this);
    this.state = {
      picked2: '',
      unPicked2: '',
    };
  }
  submitHandler2(evt) {
    evt.preventDefault();
    this.props.submitHandler([this.props.synCard])
  }
  submitHandler22(evt) {
    evt.preventDefault();
    this.props.eee(this.props.synCard)
  }

  render() {
    
    return (
      <div className="p-2">
        <Card type="button" className="btn btn-light"  >
          <Appo > hhe</Appo>
          <h5 ><div onClick={this.submitHandler2}>{this.props.synCard}</div><div>{(this.props.eee !== undefined) ? <span className="badge text-muted" onClick={this.submitHandler22}>╳</span> : ''}</div></h5> 
        
                 </Card>
      </div>
    )
  }
}
