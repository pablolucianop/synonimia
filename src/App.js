import logo from './logo.svg'
import './App.css'
import React from 'react'
import Badge from 'react-bootstrap/Badge'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Yard } from './Yard'
import { data } from './data'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allSyns: '',
    }
  }

  componentDidMount() {
    // axios
    //   .get(
    //     'https://www.abbreviations.com/services/v2/syno.php?uid=9413&tokenid=vIMVCwch6JUkn04H&word=consistent&format=json'
    //   )
    //   .then((response) => {
    //     let syns = response.data.result.map((x) => (x = x.term))
    //   console.log(response.data.result)
    //     console.log(syns)
    //     this.setState({ allSyns: syns })
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    let mainWord = 'consistent'
    let responsen = data
    // let synsMapp = responsen.map((x) => [x.synonyms])
    let synsMapp = responsen.map(
      (x) => (x = { term: x.term.split(','), syn: x.synonyms.split(',') })
    )

    console.log('synsMapp', synsMapp)
    let simples = []
    synsMapp.forEach((element) => {
      element.syn.forEach((element0) => {
        simples.push({
          sin: element0,
          term: element.term.filter(
            (word) => word === word // !== mainWord
          ),
          main: mainWord,
        })
      })
    })

    let simpsObs = { todos: simples }
    this.setState({ allSyns: simpsObs, mainWord: mainWord })
  }

  render() {
    const { allSyns } = this.state
    return (
      <div>
        <h1>{this.state.mainWord}</h1>
        <div className="p-2">
          <h3> Closer</h3>
          <button type="button" className="btn btn-light">
            <span className="badge text-muted">🡇</span>
          </button>
        </div>
        <div className="p-2">
          <h3> Far from This</h3>
          <button type="button" className="btn btn-light">
            <span className="badge text-muted">🡇</span>
          </button>
        </div>
        <Yard todos={this.state.allSyns.todos} />
      </div>
    )
  }
}

export default App
