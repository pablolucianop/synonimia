import React from 'react'
import Badge from 'react-bootstrap/Badge'
import Card from 'react-bootstrap/Card'

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
          <h5 onClick={this.submitHandler2}>{this.props.synCard}</h5>
         {(this.props.eee !== undefined) ? <span className="badge text-muted" onClick={this.submitHandler22}>🡇</span> : ''}
                 </Card>
      </div>
    )
  }
}
