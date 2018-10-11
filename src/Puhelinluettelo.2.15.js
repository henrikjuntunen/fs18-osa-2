import React from 'react'
import axios from 'axios'
import personsService from './services/rekisteri.2.15' 

// Osa 2 tehtävä 
// 2.14 - 2.19
// 1.10.2018 HJ
/*
2.14 puhelinluettelo osa 7
Palataan jälleen puhelinluettelon pariin.

Tällä hetkellä luetteloon lisättäviä uusia numeroita ei synkronoida palvelimelle. Korjaa tilanne.

2.15 puhelinluettelo osa 8
Siirrä palvelimen kanssa kommunikoinnista vastaava toiminnallisuus omaan moduuliin osan 2 esimerkin tapaan.

Eli asia mistä App on kiinnostunut on parametrin kentässä response.data.

Moduulia olisi miellyttävämpi käyttää, jos se HTTP-pyynnön vastauksen sijaan palauttaisi suoraan muistiinpanot sisältävän taulukon. Tällöin moduulin käyttö näyttäisi seuraavalta
tämä seruraavassa versiossa
*/
class App extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            persons: [
            {   
                id: 1,
                date: '2017-12-10T17:30:31.098Z',
                name: 'Arto Hellas Parikka',
                number: '040-5551235467' 
            }
            ],
            newName: '',
            newNumber: '',
            newFilter: '',
            personIdMax: 6
        }
        console.log('constructor Puhelinluettelo')
    }
    
    // moduulin funktioita käytetään importatun muuttujan noteService kautta seuraavasti:
    componentDidMount(){
        console.log('did mount Puhelinluettelo')        
        personsService
        .getAll()
        .then( response => {
            this.setState({persons: response.data})
            console.log('response getAll()', response)
            console.log('response.data', response.data)
        })
        personsService
        .getAllPersons()
        .then( response => {
            console.log('response getAllPersons()', response)
        })
    }
    /* tämä korvattiin yllä olevalla koodin pätkällä
    componentDidMount() {
        console.log('did mount Puhelinluettelo')
        axios
          .get('http://localhost:3001/persons')
          .then(response => {
            console.log('promise fulfilled Puhelinluettelo')
            this.setState({ persons: response.data })
              // Ensin siis suoritetaan konstruktori ja metodi render, ja sen jälkeen metodi componentDidMount. Tämän jälkeen kutsutaan kuitenkin vielä metodia render; miksi näin?
              console.log('this.state', this.state)
          })
      }*/

      // addPerson() lisätään henkilön tiedot puhelinluetteloon

      addPerson = (event) => {
        event.preventDefault()
        const newObject = {
            name: this.state.newName,
            number: this.state.newNumber,
            date: new Date().toISOString()
        }
        personsService
          .create(newObject)
          .then(response => {
              this.setState({
                  persons: this.state.persons.concat(response.data),
                  newName: '',
                  newNumber: ''
              })
          })
      }

      /* tämä korvattiin yllä olevalla koodin pätkällä
      addPerson = (event) => {
        event.preventDefault()
        const newObject = {
            name: this.state.newName,
            number: this.state.newNumber,
            date: new Date().toISOString()
        }
      // palautuu lisätty tieto palvelimelta clientille näytettäväksi
      console.log('newObject', newObject)
        axios
          .post('http://localhost:3001/persons', newObject)
          .then(response => {
              console.log('response.data', response.data)
            this.setState({
              persons: this.state.persons.concat(response.data),
              newName: '',
              newNumber: ''
            })
          })
      }*/

      /* ei käytossä versiosta 2.14 alkaen
        // Lisätään puhelinluetteloon henkilön tiedot Name
        addNameNumber = (event) => {
        event.preventDefault() // onSubmit default toiminnan estäminen
        console.log('addName, tallenna uusi nimi -nappia on painettu')
        console.log('addName', event.target)
        const newObject = {
            id: this.state.personIdMax + 1,
            name: this.state.newName,
            number: this.state.newNumber,
            date: new Date().toISOString(),
        }
        let ehto1 = 0
        let temp = this.state.persons.map((p) => p.name) 
        if (temp.includes(newObject.name)) { 
            ehto1 = 1
            alert('Nimi on jo luettelossa', 
            newObject.name) }
        temp = this.state.persons.map((p) => p.number) 
        if (temp.includes(newObject.number)) { 
                ehto1 = 0
                alert('Numero on jo luettelossa lisätään kuitenkin', 
                newObject.number) }
        if (ehto1 === 0) { // lisätään jos ei virheitä 
        const persons = this.state.persons.concat(newObject)
        this.setState({
            persons: persons,
            newName: '',
            newNumber: ''
        })
        this.setState((prevState) => ({ personIdMax: prevState.personIdMax + 1 }))
        }
        } // end addNameNumber
        */
       
      
      handleNameChange = (event) => {
      //  console.log(event.target.value)
        this.setState({ newName: event.target.value })
      }

      handleNumberChange = (event) => {
      //  console.log(event.target.value)
        this.setState({ newNumber: event.target.value })
      }

      handleFilterChange = (event) => {
        console.log(event.target.value)
        this.setState({ newFilter: event.target.value })
      }

      rajauksenL(){

          return(this.state.newFilter.length)
      }

      rajauksenT(){
          return(this.state.newFilter)
      }

      rajauksenFilter(){
        if ( this.rajauksenL() < 1 )
        { return(this.state.persons)}
        else
        { return(this.state.persons.filter( 
            p => p.name.toLowerCase().substring(0, this.rajauksenL()) === this.rajauksenT().toLowerCase()))}
      }

        render() {
            console.log('render Puhelinluettelo')
// TODO miksi formin sisässä onClick ei toiminut counterissa ?
        return ( // return of render of App
           <div>
                                
    <h2>Puhelinluettelo</h2>
    <Rajaa v={this.state.newFilter} oc={this.handleFilterChange}/>

    <form onSubmit={this.addPerson}>

    <Nimi  
    v={this.state.newName} 
    oc={this.handleNameChange} />

    <Numero 
    v={this.state.newNumber}
    oc={this.handleNumberChange}
    />

    <div>
    <button type="submit">lisää</button>
    </div>

    </form>
    <div>
        <h2>Numerot</h2>
        <NäytäPuhelinluettelo 
        
        puhlu = {this.rajauksenFilter()} // this.state.persons
        puhluIdMax = {this.state.personIdMax} />
        </div>
    </div>
    ) // end return of render of App
} // end render of App
} // end component App

// Puhelinluettelon näyttämäinen 
const NäytäPuhelinluettelo = (props) => { 
console.log('NäytäPuhelinluettelo', props)
return(<div>
    <ul>
    {props.puhlu.map( (p) => <li key = {p.id}> {p.name} {p.number}</li> )}
    </ul>
    </div>)}

const Rajaa = (props) =>{
/*
<div>
    rajaa näytettäviä nimiä:<input value={this.state.newFilter} 
    onChange={this.handleFilterChange}/>
    </div>

*/

    return(
        <div>
        rajaa näytettäviä nimiä:<input value={props.v} 
        onChange={props.oc}/>
        </div>
    
    )
}

const Nimi = (props) => {
/*
<form onSubmit={this.addNameNumber}>
    <div>
    nimi:<input value={this.state.newName} 
    onChange={this.handleNameChange}/>
    </div>

*/
return(
    <div>
    nimi:<input value={props.v} 
    onChange={props.oc}/>
    </div>

)

}

const Numero = (props) => {
    /*

    <div>
    number:<input value={this.state.newNumber} 
    onChange={this.handleNumberChange}/>
    </div>

    */
    return(

    <div>
    number:<input value={props.v} 
    onChange={props.oc}/>
    </div>

    )


}




export default App
/*
 npm install axios --save
  npm install ajv --save


  import React from 'react';
import ReactDOM from 'react-dom';
import App from './Puhelinluettelo';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

*/