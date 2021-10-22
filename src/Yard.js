import React from 'react'
export class Yard extends React.Component {
  render() {
    console.log('this.props.todos', this.props.todos)
    let navLinks
    if (this.props.todos !== undefined) {
      let uniques = [...new Set(this.props.todos.map((synCard) => synCard.sin))]
      console.log('uniques', uniques)

        navLinks = uniques.map((synCard, index) => {
            return <Prue synCard={synCard} key={synCard + index} />
      })
    }

    return <div className="d-flex flex-row flex-wrap">{navLinks} </div>
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
