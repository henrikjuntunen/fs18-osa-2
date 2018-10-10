import React from 'react';
// Osa 2 tehtävä 2.7
// 2.7 puhelinluettelo osa 1
// Toteutetaan yksinkertainen puhelinluettelo. Aluksi luetteloon lisätään vaan nimiä.

// 2.7 puhelinluettelo osa 2
// Jos lisättävä nimi on jo sovelluksen tiedossa, estä lisäys. Taulukolla on lukuisia sopivia metodeja tehtävän tekemiseen.

// Voit antaa halutessasi virheilmoituksen esim. komennolla alert(). Se ei kuitenkaan ole tarpeen.


class App extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            persons: [
                { id: 1, name: 'Arto Hellas Parikka', date: '2017-12-10T17:30:31.098Z' },
                { id: 2, name: 'Kati Hellas Parikka', date: '2017-12-10T17:30:31.098Z' },
                { id: 3, name: 'Aapo Hellas Parikka', date: '2017-12-08T17:30:31.098Z' },
                { id: 4, name: 'Otto Hellas Parikka', date: '2017-12-10T17:30:31.098Z' },
                { id: 5, name: 'Mari Hellas Parikka', date: '2017-12-10T17:30:31.098Z' },
                { id: 6, name: 'Aila Hellas Parikka', date: '2017-12-10T17:30:31.098Z' }
            ],
            newName: '',
            personIdMax: 6
        }
    }
    
        // Lisätään puhelinluetteloon henkilön tiedot Name
        addName = (event) => {
        event.preventDefault() // onSubmit default toiminnan estäminen
        console.log('addName, tallenna uusi nimi -nappia on painettu')
        console.log('addName', event.target)
        const newObject = {
            id: this.state.personIdMax + 1,
            name: this.state.newName,
            date: new Date().toISOString(),
        }
        let ehto1 = 0
        let temp = this.state.persons.map((p) => p.name) 
        if (temp.includes(newObject.name)) { 
            ehto1 = 1
            alert('Nimi on jo luettelossa', newObject.name) }
        if (ehto1 === 0) { 
        const persons = this.state.persons.concat(newObject)
        this.setState({
            persons: persons,
            newName: ''
        })
        this.setState((prevState) => ({ personIdMax: prevState.personIdMax + 1 }))
        }
        } // end addName
       
      
      handleNoteChange = (event) => {
        console.log(event.target.value)
        this.setState({ newName: event.target.value })
      }

        render() {
            console.log('render Puhelinluettelo')
// TODO miksi formin sisässä onClick ei toiminut counterissa ?
        return ( // return of render of App
           <div>
                                
    <h2>Puhelinluettelo</h2>
    <form onSubmit={this.addName}>
    <div>
    nimi:<input value={this.state.newName} 
    onChange={this.handleNoteChange}/>
    </div>
    <div>

    <button type="submit">lisää</button>
    </div>
    </form>
    <div>
        <h2>Numerot</h2>
        <NäytäPuhelinluettelo 
        name = {this.state.persons[0].name} 
        puhlu = {this.state.persons} 
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
    {props.puhlu.map( (p) => <li key = {p.id}> {p.name} </li> )}
    </ul>
    </div>)}

export default App