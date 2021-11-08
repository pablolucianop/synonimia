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
    this.props.handlePick(evt);
    console.log('evto',evt)
  }
      submitHandler2(evt) {
    this.props.handleUnPick(evt);
  }

    unPick(evt) {

    // pass the input field value to the event handler passed
    // as a prop by the parent (App)
    this.props.handleUnPick(evt);
    console.log('evto',evt)
    
    // this.setState({
    //   inputField: ''
    // });
  }

  componentDidMount() {
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
        return <WordButton synCard={synCard} key={synCard + index} www={this.submitHandler}  uuu={this.submitHandler}  />
      })
    // }
 
    return (<div className="d-flex flex-row flex-wrap">{navLinks} 
    </div>)
  }
}
}