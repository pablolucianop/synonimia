import React from 'react'
export class Yard extends React.Component {
  render() {
    console.log('this.props.todos', this.props.todos)
    let navLinks = <Prue este={'pers'} />
    if (this.props.todos !== undefined) {
      let unicos = [...new Set(this.props.todos.map((este) => este.sin))]
      console.log('unicos', unicos)

      navLinks = unicos.map((pers) => {
        return <Prue este={pers} />
      })
    }

    return <div class="d-flex flex-row flex-wrap">{navLinks} </div>
  }
}

class Prue extends React.Component {
  render() {
    // console.log('this.props.este.term', this.props.este.term)
    return (
      <div class="p-2">
        <button type="button" class="btn btn-light">
          {this.props.este}
          <span class="badge text-muted">🡇</span>
        </button>
      </div>
    )
  }
}
