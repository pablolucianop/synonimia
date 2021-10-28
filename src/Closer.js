import React from 'react'
import { WordButton } from './WordButton'

export class Closer extends React.Component {
  render() {
    console.log('this.props.todos', this.props.todos)
    let navLinks
    if (this.props.todos !== undefined) {
      let uniques = this.props.todos

      navLinks = uniques.map((synCard, index) => {
        return <WordButton synCard={synCard} key={synCard + index} />
 
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

