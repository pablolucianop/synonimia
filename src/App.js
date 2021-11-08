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
import { useSpring, animated } from 'react-spring'


function Appo() {
  const props = useSpring({ 
    
    // loop: { reverse: true },
    from: { opacity: 0 },
    to: { opacity: 1},
    config: { duration: 1000 }
  })
  return <animated.div  className="navigation-menu" style={props}>        <h1 >SINONIMS</h1></animated.div>
}

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
      uniques: [],
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
    handlePick(selectedWord) {
      this.setState({ picked: [...this.state.picked, selectedWord] })
      this.setState({ value: selectedWord },()=>{
        this.handleSubmitSearch()
      })
  }
    handleUnPick(selectedWord) {
      this.setState({ picked: this.state.picked.filter((x) => x !== selectedWord) })

  }

  async handleSubmitSearch(event) {
    this.setState({ mainWord: this.state.value })
    console.log('this.state.value', this.state.value)
    let word = this.state.value
    let response = await axios.get(`https://www.abbreviations.com/services/v2/syno.php?uid=9413&tokenid=vIMVCwch6JUkn04H&word=${word}&format=json`)

        console.log('response.data.result', response.data)
           this.setState({ response: response.data.result })
           console.log('this.state.response', this.state.response)

        //if the word isnt an english word, show related words
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
          return
        }
        //if the word is an english word
    let mainWord 
    let responsen 
    //is the response is a single object, turn it into an array
    Array.isArray(response.data.result) ? responsen = response.data.result : responsen = [response.data.result]
    //turn the response in array of {sin: [], term: '', main:''}, in simples
    function synsAndTerms (x){
      let xterm = x.term.split(',').map((x) => x[0] === ' '? x.slice(1): x)
      let xSyn = x.synonyms.split(',').map((x) => x[0] === ' '? x.slice(1): x)
       if(x.synonyms.indexOf(',') !== -1){
         xSyn = x.synonyms.split(',').map((x) => x[0] === ' '? x.slice(1): x)
       }else{
         xSyn = x.synonyms
       }

        x = { term: xterm, syn: xSyn }
        return x
    }
    let synsMapp = responsen.map(
     synsAndTerms
    )
      
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
//make an array of all the synonyms and filter duplicates
    let uniques = [...new Set(simples.map((synCard) => synCard.sin))]
    console.log('uniques', uniques)
    //pass all uniques to state
     this.setState({ uniques:uniques })

    //pass  array of {sin: [], term: '', main:''} to state
    let simpsObs = { todos: simples }
    this.setState({ allSyns: simpsObs })

        // console.log(error)


  }


  setMainWord(event) {
    this.setState({ mainWord: event.target.value })
  }


  render() {
  const pull_data = (data) => {
    console.log(data); 
  }

    return (
      <div>

        <Appo />
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
        <Yard uniques={this.state.uniques} handlePick={this.handlePick} handleUnPick={this.handleUnPick} func={pull_data} onHeaderClick={this.handleSort}/>
      <div>
      </div>
      </div>
    )
  }
}

export default App
