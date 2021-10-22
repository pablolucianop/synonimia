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
    }
    this.setMainWord = this.setMainWord.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    this.setState({ mainWord: this.state.value });
    event.preventDefault();
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
    this.setState({ allSyns: simpsObs, mainWord: 'rrr' })
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
            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
          </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                  Link
        </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>


        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <h2>y la palabra es {this.state.mainWord}</h2>
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
