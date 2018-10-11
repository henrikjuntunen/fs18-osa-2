import React from 'react'
// import axios from 'axios'  siirretty ./services/rekisteri.js tiedostoon
import personsService from './services/rekisteri' 

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

2.16 puhelinluettelo osa 9
Tee ohjelmaan mahdollisuus yhteystietojen poistamiseen. Poistaminen voi tapahtua esim. nimen yhteyteen liitetyllä napilla. Poiston suorittaminen voidaan varmistaa käyttäjältä window.confirm-metodilla:

*/
class App extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            persons: [
            {   
                name: 'Arto Hellas Parikka',
                number: '040-5551235467', 
                date: '2017-12-10T17:30:31.098Z',
                id: 1
            }
            ],
            newName: '',
            newNumber: '',
            newFilter: '',
            personIdMax: 6
        }
        this.handleAddPerson = this.handleAddPerson.bind(this)
        this.handleFilterChange = this.handleFilterChange.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleNumberChange = this.handleNumberChange.bind(this)
        this.handleOnClickPoista = this.handleOnClickPoista.bind(this)
        console.log('constructor Puhelinluettelo')
    }
    
    // moduulin funktioita käytetään importatun muuttujan noteService kautta seuraavasti:
    componentDidMount(){
        console.log('did mount Puhelinluettelo')        
        personsService
        .getAll()
        .then( response => {
        // this.setState({persons: this.state.persons.concat(response.data)})
           this.setState({persons: response.data})
            console.log('response getAll()', response)
            console.log('response.data', response.data)
        })
 
    }
 

      // addPerson() lisätään henkilön tiedot puhelinluetteloon

      handleAddPerson = (event) => {
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
      
      // remove poista
      // etsitään taulukon indeksi jotta voidaan ottaa pois taulukosta joka on talletettuna tilaan

//function
myFunctionB(taulu, value) {
    
    let r = taulu.length;
for ( let i = 0; i < taulu.length; i++)
    { if ( taulu[i].id === value ) {
                                r = i ;
                                i = taulu.length ;}
    };
return(r);
}



//function 
myFunctionC(taulu1, poista) {
// poisteaan alkio taulusta indeksin kohdasta poista
const taulu2 = taulu1.slice(0, poista).concat(taulu1.slice((poista + 1)))
console.log('taulu2 001', taulu2)
return(taulu2)
}

// TODO miten välitetään arvo tähän poistoon valitusta rivistä
      handleOnClickPoista = (arvoP) => {
          // debugger
          let arvo = arvoP
          console.log('in handleOnClick this is ', this)
        let taulu = this.state.persons
        console.log('taulu 001', taulu)
          console.log('poista arvo 001', arvo)
          
          console.log('poista arvo 002', arvo)
        if (window.confirm('poistetaanko: ' + arvo)) {
      const poisto =  
      personsService
      .remove(arvo)
            .catch(error => { console.log('remove error', error)})
          console.log('poista arvo 002', arvo)
          console.log('taulu 002', taulu)
          taulu = this.setState({persons: this.myFunctionC(taulu, 
            (this.myFunctionB(taulu, arvo)))})
          console.log('taulu 003', taulu)
            // oistavat arvon taulukosta ja laitetaan tilaan talteen
            }
            return (arvo)
      
      }




      rajauksenL(){

          return(this.state.newFilter.length)
      }

      rajauksenT(){
          return(this.state.newFilter)
      }

      rajauksenFilter(){

          let result
          if ( this.rajauksenL() < 1 )
          { result = this.state.persons
            console.log('rejauksenFilter 001', result, this.state.persons) }
          //return(this.state.persons)}
          else
          {   //return(this.state.persons.filter( 
              result = this.state.persons.filter( 
                  p => p.name.toLowerCase().substring(0, 
                    this.rajauksenL()) === this.rajauksenT().toLowerCase())
                    //    )
                    console.log('rejauksenFilter 002') }
          console.log('rajauksenFilter 003', result)
          return (result)
      }

        render(){
            console.log('render Puhelinluettelo')
       let iid = 18
// TODO miksi formin sisässä onClick ei toiminut counterissa ?
        return ( // return of render of App
           <div>
                                
    <h2>Puhelinluettelo</h2>
    <Rajaa v={this.state.newFilter} oc={this.handleFilterChange}/>

    <form onSubmit={this.handleAddPerson}>

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
        <table>
            <thead>

            </thead>
            <tbody>
{this.rajauksenFilter().map( (p) => 
<tr key = {p.id}> 
<td>{p.id}</td>
<td>{p.name}</td> 
<td>{p.number}</td>
<td>
<button onClick={this.handleOnClickPoista.bind(this, p.id)}>poista</button>
</td>
</tr> )}       
            </tbody>
        </table>
        </div>
    </div>
    ) // end return of render of App
} // end render of App
} // end component App


/*
TODO miksi täältä ei iid välity handleOnClickPoista funktiolle 
<NäytäPuhelinluetteloTaulukossa 
puhlu = {this.rajauksenFilter()} // this.state.persons
puhluIdMax = {this.state.personIdMax} 
// TODO miksi alla oleva tapa välittää iid toimii ?
poistaTämäNimi = {this.handleOnClickPoista.bind(this, iid)}
/>
*/

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

const NäytäPuhelinluetteloTaulukossa = (props) => {
    console.log('NäytäPuhelinluetteloTaulukossa', props)

    return( // TODO miten täältä saa välitettyä id arvon poistotoiminnolle
        <table>
            <thead>

            </thead>
            <tbody>
{props.puhlu.map( (p) => 
<tr key = {p.id}> 
<td>{p.id}</td>
<td>{p.name}</td> 
<td>{p.number}</td>
<td>
<button onClick={props.poistaTämäNimi} personid = {p.id}>poista</button>
</td>
</tr> )}       
            </tbody>
        </table>
    )
}

// <button onClick={ptn(8)} personid = {p.id}>poista</button>


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