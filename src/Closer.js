import React from 'react'
export class Closer extends React.Component {
  render() {
    console.log('this.props.todos', this.props.todos)
    let navLinks
    if (this.props.todos !== undefined) {
      let uniques = this.props.todos

      navLinks = uniques.map((synCard, index) => {
        return <Prue synCard={synCard} key={synCard + index} />
 
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

class Prue extends React.Component {
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
