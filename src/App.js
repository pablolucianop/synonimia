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
    let responsen = [
      {
        antonyms:
          'at odds(p), scratchy, unreconciled, uneven, contradictory, inconsistent, conflicting, incompatible, spotty, heterogeneous, discrepant, heterogenous, self-contradictory, unconformable',
        definition:
          "(sometimes followed by `with') in agreement or consistent or reliable",
        example:
          '"testimony consistent with the known facts"; "I have decided that the course of conduct which I am following is consistent with my sense of responsibility as president in time of war"- FDR',
        partofspeech: 'adj',
        synonyms: 'ordered, coherent, logical, reproducible, uniform',
        term: 'consistent',
      },

      {
        antonyms:
          'scratchy, spotty, contradictory, conflicting, incompatible, uneven, heterogenous, inconsistent, unreconciled, heterogeneous, at odds(p), self-contradictory, unconformable, discrepant',
        definition: 'capable of being reproduced',
        example: '"astonishingly reproducible results can be obtained"',
        partofspeech: 'adj',
        synonyms:
          'uniform, ordered, coherent, logical, reproducible, consistent',
        term: 'reproducible, consistent',
      },

      {
        antonyms:
          'discrepant, heterogenous, contradictory, inconsistent, conflicting, scratchy, uneven, at odds(p), unconformable, heterogeneous, self-contradictory, incompatible, spotty, unreconciled',
        definition:
          'marked by an orderly, logical, and aesthetically consistent relation of parts',
        example: '"a coherent argument"',
        partofspeech: 'adj',
        synonyms:
          'coherent, consistent, ordered, uniform, tenacious, lucid, logical, legitimate, arranged, reproducible',
        term: 'coherent, consistent, logical, ordered',
      },

      {
        antonyms:
          'unreconciled, inconsistent, at odds(p), discrepant, incompatible, unconformable, heterogenous, heterogeneous, uneven, contradictory, conflicting, spotty, scratchy, self-contradictory',
        definition: 'the same throughout in structure or composition',
        example:
          '"bituminous coal is often treated as a consistent and homogeneous product"',
        partofspeech: 'adj',
        synonyms:
          'coherent, consistent, ordered, uniform, unvarying, logical, undifferentiated, reproducible',
        term: 'consistent, uniform',
      },
    ]
    let syns = responsen[0].synonyms.split(',')
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
        <Yard todos={this.state.allSyns.todos} />
      </div>
    )
  }
}

export default App
