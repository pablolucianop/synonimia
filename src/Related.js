import React from 'react'
export class Related extends React.Component {
  render() {
      let related = 'aaa'
        //   let related = this.props.related.map((x) => (
        //     <button type="button" className="btn btn-light">
        //       {x.term}
        //     </button>
        //   ))

    return (
        <div>did you mean {related} </div>
    )
  }
}
