import React from 'react'
import { WordButton } from './WordButton'

export class Yard   extends React.Component  {
  constructor() {
    super();
    this.submitHandler = this.submitHandler.bind(this);
        this.submitHandler2 = this.submitHandler2.bind(this);
    this.state = {
      inputField: ''
    };
  }
  
    submitHandler(evt) {

    // pass the input field value to the event handler passed
    // as a prop by the parent (App)
    this.props.handlePick(evt);
    console.log('evto',evt)
    
    // this.setState({
    //   inputField: ''
    // });
  }
      submitHandler2(evt) {

    // pass the input field value to the event handler passed
    // as a prop by the parent (App)
    this.props.handleUnPick(evt);
    console.log('evto',evt)
    
    // this.setState({
    //   inputField: ''
    // });
  }

  componentDidMount() {
  // this.props.handlePick()
}
  handleClick = () => {
    this.props.onHeaderClick(this.props.value);
  }
  render() {
        let navLinks
    if (this.props.todos !== undefined) {
      let uniques = [...new Set(this.props.todos.map((synCard) => synCard.sin))]
      //   console.log('uniques', uniques)


      navLinks = uniques.map((synCard, index) => {
        return <WordButton synCard={synCard} key={synCard + index} www={this.submitHandler} />
      })
    }
 
    return (<div className="d-flex flex-row flex-wrap">{navLinks} 
    <button onClick={this.submitHandler}> www</button>
    </div>)
  }
}

