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
  componentDidMount() {
    let word = 'red'
    axios
      .get(
        `https://www.abbreviations.com/services/v2/syno.php?uid=9413&tokenid=vIMVCwch6JUkn04H&word=${word}&format=json`
      )
      .then((response) => {
        console.log(response)
        let synsMapp2 = response.data.result.map(
          (x) => (x = { term: x.term.split(','), syn: x.synonyms.split(',') })
        )
        let simples = []
        synsMapp2.forEach((element) => {
          element.syn.forEach((element0) => {
            simples.push({
              sin: element0,
              term: element.term,
              main: word,
            })
          })
        })

        console.log('simples', simples)
        let cleaned = []
        simples.forEach((element) => {
          //order alphabet
          // console.log('...',)
          // console.log('element.sin', element.sin)
          // console.log('element.sin[0]', element.sin[0])
          if (
            element.sin[0] === ' ' &&
            element.sin !== undefined &&
            element !== undefined
          ) {
            element.sin = element.sin.substring(1)
          }
          cleaned.push(element)
        })

        function compare(a, b) {
          if (a.sin < b.sin) return -1
          if (a.sin > b.sin) return 1
          return 0
        }
        let cleanedSorted = cleaned.sort(compare)
        console.log(cleanedSorted)
        let cleanedSortedJistSyn = [
          ...new Set(cleanedSorted.map((syn) => syn.sin)),
        ]

        console.log(cleanedSortedJistSyn)

        let justTerms = [...new Set(cleanedSorted.map((syn) => syn.term))]
        console.log(cleanedSortedJistSyn)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <div>
        <h1>app solo para data</h1>
      </div>
    )
  }
}

export default App
