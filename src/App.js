import logo from './logo.svg'
import './App.css'
import React from 'react'
import Badge from 'react-bootstrap/Badge'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'
import axios from 'axios'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Yard } from './Yard'
import { data } from './data'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allSyns: '',
      value: '',
      related: '',
      mainWord: ''
    }
    this.setMainWord = this.setMainWord.bind(this)
    this.handleChangeInput = this.handleChangeInput.bind(this)
    this.handleSubmitSearch = this.handleSubmitSearch.bind(this)
  }
  handleChangeInput(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmitSearch(event) {
    // alert('A name was submitted: ' + this.state.value);
    this.setState({ mainWord: this.state.value })
    let word = this.state.value
    axios
      .get(
        `https://www.abbreviations.com/services/v2/syno.php?uid=9413&tokenid=vIMVCwch6JUkn04H&word=${word}&format=json`
      )
      .then((response) => {
        console.log('response.data.result', response.data)
           this.setState({ response: response.data.result })
           console.log('this.state.response', this.state.response)

        //if the word isnt an english word
        if (response.data.result === undefined) {
          console.log('exito')
          console.log(response.data.related)
          let related = response.data.related.map((x) => (
            <button type="button" className="btn btn-light">
              {x.term}
            </button>
          ))
          let didYouMean = <div>did you mean{related} </div>
          this.setState({ related: didYouMean })

          // this.setState({ related: response.data.related[0].term })
          return
        }
        // if (response.data.result[0].definition === undefined){
        //   alert(response.data.result.related)
        // }
        let syns = response.data.result.map((x) => (x = x.term))

        this.setState({ allSyns: syns })
      })
      .catch((error) => {
        console.log(error)
      })

    event.preventDefault()
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

    console.log('this.state', this.state)
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
    this.setState({ allSyns: simpsObs, mainWord: '' })
  }

  setMainWord(event) {
    console.log('vevent.target', event.target)

    this.setState({ mainWord: event.target.value })
  }

  render() {
    return (
      <div>
        <h1>SINONIMS</h1>

        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">search synonims</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  value={this.state.value}
                  onChange={this.handleChangeInput}
                />
                <Button variant="outline-success" onClick={this.handleSubmitSearch}>
                  Search
                </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* <h2>
          <Badge bg="secondary">{this.state.related.join(',')}</Badge>
        </h2> */}
        <h3 bg="secondary">{this.state.related}</h3>

        <h2>
          <Badge bg="secondary">{this.state.mainWord}</Badge>
        </h2>
        <div className="p-2">
          <h3> Closer</h3>
          <button type="button" className="btn btn-light">
            <span className="badge text-muted">🡇</span>
          </button>
        </div>
        <div className="p-2">
          <h3> Far from This</h3>
          <button
            type="button"
            className="btn btn-light"
            onClick={this.setMainWord}
          >
            <span className="badge text-muted">🡇</span>
          </button>
        </div>
        <Yard todos={this.state.allSyns.todos} />
      </div>
    )
  }
}

export default App
