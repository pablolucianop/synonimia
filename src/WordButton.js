import React from 'react'

export class WordButton extends React.Component {
  render() {
    return (
      <div className="p-2">
        <button type="button" className="btn btn-light">
             {this.props.synCard}
          <span className="badge text-muted">🡇</span>
        </button>
      </div>
    )
  }
}
