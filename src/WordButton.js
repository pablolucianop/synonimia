import React from 'react'

export class WordButton extends React.Component {
  constructor() {
    super();
    this.submitHandler2 = this.submitHandler2.bind(this);
    this.state = {
      picked2: ['aa','perroo']
    };
  }
  submitHandler2(evt) {
    evt.preventDefault();
    //this.props.www
    // pass the input field value to the event handler passed
    // as a prop by the parent (App)
    this.props.www(['qq','caca'])
    
    // this.setState({
    //   inputField: ''
    // });
  }

  render() {
console.log('this.props.www', this.props.www)
console.log('this.props.synCard', this.props.synCard)
    return (
      <div className="p-2">
        <button type="button" className="btn btn-light" onClick={this.submitHandler2} >
             {this.props.synCard}
          <span className="badge text-muted">🡇</span>
        </button>
      </div>
    )
  }
}
