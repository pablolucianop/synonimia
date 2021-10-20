import logo from './logo.svg'
import './App.css'
import React from 'react'
import Badge from 'react-bootstrap/Badge'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import axios from 'axios'

// import Jumbotron from 'react-bootstrap/Jumbotron'

import 'bootstrap/dist/css/bootstrap.min.css'

// function getPokemonInfo() {
// axios.get('https://api.agify.io/?name=Brayan`', {
//  headers: {
//    Authorization: '563492ad6f917000010000018a9e9260684740c78c441ff6264931e5'
//  }
// })

//   axios
//     .get(`https://api.agify.io/?name=Brayan`),
//     // .get(`https://pokeapi.co/api/v2/pokemon/${stateSearch}/`)
//     .then((response) => {
//       // alert(response)
//       console.log(response.data.age)
//     })
//     .catch((error) => {
//       // alert(`${stateSearch} is not a pokemon`)
//     })
// }
// getPokemonInfo()
// alert('response')
class Colectivo extends React.Component {
  constructor(props) {
    super(props)
    this.state = { texto: 1 }
    this.changeColor = this.changeColor.bind(this)
  }
  changeColor() {
    // getPokemonInfo()
    const newColor = ++this.state.texto
    this.setState({ texto: newColor })
  }
  //   componentDidMount() {
  //     // axios
  //     //   .get(
  //     //     'https://www.stands4.com/services/v2/syno.php?uid=9413&tokenid=vIMVCwch6JUkn04H&word=good&format=json'
  //     //   )
  //     //   .then((response) => {
  //     //     console.log(22, response)
  //     //     // this.setState({ imageURL: response });
  //     //   })
  //     //   .catch((error) => {
  //     //     console.log(error)
  //     //   })
  //   }

  render() {
    const univ = this.props.univ
    // alert(this.props.univ.gente)
    const navLinks = univ.gente.map((pers) => {
      return <Persona perso={pers} univ={univ} />
    })
    let navLinksResu = navLinks.splice(0, this.state.texto)

    return (
      <nav onClick={this.changeColor}>
        {this.state.texto}
        {navLinksResu}
      </nav>
    )
  }
}

class Persona extends React.Component {
  render() {
    // console.log('this.props.univ', this.props.univ.organos)
    let univo = this.props.univ
    let saluu = this.props.perso.salud
    // console.log('univo', univo)
    let oferta = (
      <h3>
        <Badge bg="secondary">OFERTA</Badge>
      </h3>
    )
    let oferta2 = <h3></h3>
    function sayHello() {
      console.log('You clicked me!' + saluu)
    }
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.perso.foto} />
        <Card.Body>
          {saluu < 5 ? oferta : oferta2}
          <Card.Title>
            {' '}
            {this.props.perso.firstName} {this.props.perso.lastName}
          </Card.Title>
          <Card.Text>Salud {this.props.perso.salud}</Card.Text>
          <SacoDeOrganos univo={univo} sal={saluu} />
          <Button variant="primary">Primary</Button>{' '}
        </Card.Body>
      </Card>
    )
  }
}

class SacoDeOrganos extends React.Component {
  render() {
    function getRandomInt(max) {
      return Math.floor(Math.random() * max)
    }
    const sal = this.props.sal
    let oo = this.props.univo.organos.slice(0, sal)
    const navLinks = oo.map((org, i) => {
      return (
        <ListGroup.Item>
          {org} {getRandomInt(10) * this.props.sal}%
        </ListGroup.Item>
      )
    })
    return (
      <nav>
        <ListGroup>{navLinks} </ListGroup>{' '}
      </nav>
    )
  }
}

function doIT(params) {
  console.log('You clicked me!' + params)
  // alert(999)
}

function Person(first, last, age, salud, foto) {
  this.firstName = first
  this.lastName = last
  this.salud = salud
  this.foto = foto
  this.func = doIT
}

let marioFot = 'https://i.imgur.com/mtbl1cr.jpeg'
let normanFot = 'https://i.imgur.com/vpKNYfK.jpeg'
let canarFot = 'https://i.imgur.com/YY9iR9G.png'

const marioPereyra = new Person('Mario', 'Pereyra', 56, 10, marioFot)
const normanBrisky = new Person('Norman', 'brisky', 130, 1, normanFot)
const canarioLopez = new Person('Canario', 'Lopez', 16, 5, canarFot)

function App() {
  let univ = {
    nombres: ['Juan Carlos II', 'Elda', 'Elga', 'Tito', 'art', 'shop'],

    organos: [
      'pancreas',
      'celebro',
      'ojos',
      'estómago',
      'esternon',
      'pulmones',
      'órgano alma',
    ],
    gente: [marioPereyra, normanBrisky, canarioLopez],
  }

  let responde = {
    results: {
      result: {
        term: 'consistent',
        definition:
          "(sometimes followed by 'with') in agreement or consistent or reliable",
        partofspeech: 'adj',
        synonyms: 'ordered, coherent, logical, reproducible, uniform',
        antonyms:
          'scratchy, unreconciled, uneven, contradictory, inconsistent, conflicting, incompatible, spotty, heterogeneous, discrepant, heterogenous, self-contradictory, unconformable',
      },
    },
  }

  // Person('Mario', 'Pereyra', 100)

  return (
    <div className="App">
      {/* <Jumbotron>rrrr </Jumbotron> */}
      <Colectivo univ={univ} />
    </div>
  )
}

export default App
