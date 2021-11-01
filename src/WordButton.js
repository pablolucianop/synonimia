import React from 'react'

export class WordButton extends React.Component {
  render() {
console.log('this.props.www', this.props.www)
console.log('this.props.synCard', this.props.synCard)
    return (
      <div className="p-2">
        <button type="button" className="btn btn-light" onClick={this.props.www} >
             {this.props.synCard}
          <span className="badge text-muted">🡇</span>
        </button>
      </div>
    )
  }
}
