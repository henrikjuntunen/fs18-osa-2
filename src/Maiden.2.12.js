import React from 'react'
import axios from 'axios'

/* 

30.9.2018

2.12* maiden tiedot
Rajapinta https://restcountries.eu tarjoaa paljon eri maihin liittyvää tietoa koneluettavassa muodossa REST-apina.

Tee sovellus, jonka avulla voit tarkastella eri maiden tietoja. Sovelluksen kannattaa hakea tiedot endpointista all.

Sovelluksen käyttöliittymä on yksinkertainen. Näytettävä maa haetaan kirjoittamalla hakuehto etsintäkenttään.

Jos ehdon täyttäviä maita on liikaa (yli 10), kehoitetaan tarkentamaan hakuehtoa:

Jos maita on alle kymmenen, mutta yli 1 näytetään hakuehdon täyttävät maat:

Kun ehdon täyttäviä maita on enää yksi, näytetään maan lippu sekä perustiedot:

*/

class App extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            maiden: [],
            newFilter: 'F',
            maaLkm: 1
        }
    }
    
    handleFilterChange = (event) => {
        console.log(event.target.value)
        this.setState({ newFilter: event.target.value })
      }

      rajauksenL = () => {

          return(this.state.newFilter.length)
      }

      rajauksenT = () => {
          return(this.state.newFilter)
      }

      rajauksenFilter = () => {
        if ( this.rajauksenL() < 1 )
        {          //   this.setState({maaLkm: this.state.maiden.length})

            return(this.state.maiden)}
        else
        { 
            let taulu = this.state.maiden.filter( 
            p => p.name.toLowerCase().substring(0, 
                this.rajauksenL()) === this.rajauksenT().toLowerCase())
            // this.setState({maaLkm: taulu.length})
            return(taulu)    
        }
        }

      rajauksenP = () => {
          // palauttaa maiden lukumäärän
          console.log('maaLkm', this.state.maaLkm)
        return(this.state.maaLkm)
          
      }

    componentDidMount() {
        console.log('did mount')
        axios
          .get('https://restcountries.eu/rest/v2/all')
          .then(response => {
            console.log('promise fulfilled')
            this.setState({ maiden: response.data })
            console.log(this.state.maiden)
          })
    }

    render() {
        console.log('render Maaluettelo')
        return (
      
            <div>
            <div>...Maanimiluettelo...</div>
            <Rajaa v={this.state.newFilter} oc={this.handleFilterChange}
            />
            <NäytäMaaluettelo puhlu = {this.rajauksenFilter()}
           
            />
        </div>
        )
    }

}


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

    // Puhelinluettelon näyttämäinen 
const NäytäMaaluettelo = (props) => { 
    console.log('NäytäMaaluettelo', props)
    // For example, style={{marginRight: spacing + 'em'}} when using JSX.
    let lukum = props.puhlu.length
    let key = 0
if (lukum === 1) {
        return(
            <div>
                <p>

                Maatiedot
                </p>
<ul>

 {props.puhlu.map( 
     (p) =>
     <li key={++key}>
            
        {p.name}
        <br></br>
        {p.subregion}
        <br></br>
        {p.capital}     
        <br></br>  
        {p.population}
        <br></br>
        <img src={p.flag}
        alt="Flag" height="30" width="50">
        
        </img>
        
        </li>
            
            )}

            </ul>
            </div>
        )
    
    } 
    
if (lukum > 10) {
    return(
        <div>
            Tarkenna hakua
        </div>
    )

} 
if (lukum < 10 
    && lukum > 1 ) {

    
    return(<div>
        <table>
        <thead>

        <tr>
        <th>name</th>
        <th>subregion</th>
        <th>capital</th>
        </tr>
        </thead>
        <tbody>

        {props.puhlu.map( 
            (p) =>
            <tr key={++key}>
            
        <td>{p.name}</td>
        <td>{p.subregion}</td>
        <td>{p.capital}</td>       
            <td>

        <img src={p.flag}
        alt="Flag" height="30" width="50">
        
        </img>
        </td>
    

        </tr>
            
            )}
        </tbody>
        </table>
        
        </div>)}

return(
    <div>
        Anna maan nimen alkuosa
    </div>
)
}




export default App
