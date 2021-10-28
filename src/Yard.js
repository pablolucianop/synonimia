import React from 'react'
import { WordButton } from './WordButton'

export class Yard extends React.Component {
  componentDidMount() {
  // this.props.handlePick()
}

  render() {
        let navLinks
    if (this.props.todos !== undefined) {
      let uniques = [...new Set(this.props.todos.map((synCard) => synCard.sin))]
      //   console.log('uniques', uniques)
      console.log('this.props.handlePick', this.props.handlePick)

      navLinks = uniques.map((synCard, index) => {
        return <WordButton synCard={synCard} key={synCard + index} handlePick ={ this.props.handlePick}  />
      })
    }

    return <div className="d-flex flex-row flex-wrap">{navLinks} </div>
  }
}

