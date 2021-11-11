import React from 'react'
import { WordButton } from './WordButton'

export class Closer extends React.Component {
  constructor() {
    super();
    this.submitHandler2 = this.submitHandler2.bind(this);
  }

    submitHandler2(evt) {

    // pass the input field value to the event handler passed
    // as a prop by the parent (App)
    this.props.handleUnPick(evt);
    console.log('evto0000',evt)
    
    // this.setState({
    //   inputField: ''
    // });
  }
  render() {
    // console.log('this.props.todos', this.props.todos)
    let navLinks
    if (this.props.todos !== undefined) {
      let uniques = this.props.todos

      navLinks = uniques.map((synCard, index) => {
        return <WordButton synCard={synCard} key={synCard + index} eee={this.submitHandler2} />
 
      })
    }

    return (
        <div className="p-3 mb-2 bg-info text-white">
            <h2>Closer</h2>
                <div className="d-flex flex-row flex-wrap">{navLinks} </div>
        </div>
        )
  }
}

