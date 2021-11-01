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
import { Closer } from './Closer'
import { data } from './data'

class Related extends React.Component {
  render() {
    let related33 =this.props.related.map((x) => (
      <button type="button" className="btn btn-light">
        {x}
      </button>
  ))
    return (
      <div>
        did you mean:
          <div className="p-2">
            {related33}
          </div>
      </div>
    )
  }
}


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allSyns: '',
      value: '',
      related: '',
      related2: [],
      mainWord: '',
         picked: [],

    }
    this.setMainWord = this.setMainWord.bind(this)
    this.handleChangeInput = this.handleChangeInput.bind(this)
    this.handleSubmitSearch = this.handleSubmitSearch.bind(this)
    this.handlePick = this.handlePick.bind(this)
        this.handleUnPick = this.handleUnPick.bind(this)
  }
  handleChangeInput(event) {
    this.setState({ value: event.target.value })
  }
    handlePick(eee) {
      this.setState({ picked: [...this.state.picked, eee] })
    // this.setState({ picked:eee })
    console.log('this.state.picked', this.state.picked)
    console.log('eee',eee)
  }
    handleUnPick(eee) {
      this.setState({ picked: this.state.picked.filter((x) => x !== eee) })
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
          let justRelated = response.data.related.map((x) => (
              x.term
          ))
          let didYouMean = <div>did you mean{related} </div>
          this.setState({ related: didYouMean })
            this.setState({ related2: justRelated })
            console.log('this.state.related2', this.state.related2)
          // this.setState({ related: response.data.related[0].term })
          return
        }

        console.log('data',data)
        console.log('response.data.result', response.data.result)
             // if (response.data.result[0].definition === undefined){
        //   alert(response.data.result.related)
        // }
        // let syns = response.data.result.map((x) => (x = x.term))

        // this.setState({ allSyns: syns })
    console.log('this.state', this.state)
    let mainWord = 'consistent'
    let responsen = response.data.result



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
    this.setState({ allSyns: simpsObs })
      })
      .catch((error) => {
        console.log(error)
        alert('error', error)
      })

    event.preventDefault()
  }

  

  setMainWord(event) {
    console.log('vevent.target', event.target)

    this.setState({ mainWord: event.target.value })
  }


  render() {

  const pull_data = (data) => {
    console.log(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
  }
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

        <h3 bg="secondary">       
         {this.state.related2.length>0 ? <Related related={this.state.related2} /> : null}
         </h3>

        <h2>
          <Badge bg="secondary">{this.state.mainWord}</Badge>
        </h2>
        <Closer todos={this.state.picked} handleUnPick={this.handleUnPick} />
        <Yard todos={this.state.allSyns.todos} handlePick={this.handlePick} handleUnPick={this.handleUnPick} func={pull_data} onHeaderClick={this.handleSort}/>

         
      </div>
    )
  }
}

export default App
