import React from 'react'
// Osa 2 tehtävä 2.2
const Kurssi = ({ kurssi }) => {
    console.log('kurssi2')
    console.log(kurssi)
    console.log(kurssi.nimi)
    console.log(kurssi.osat)
    console.log(kurssi.osat[0].nimi)
    console.log(kurssi.osat[0].tehtavia)
    console.log(kurssi.osat[0].id)
    const kurssinOsat = kurssi.osat
    const väli = ' '
    console.log('kurssinOsat')
    console.log(kurssinOsat)

kurssinOsat.map( (l) => l.nimi + väli + l.tehtavia + väli + l.id ) 

const laske = () => {
    console.log('laske', kurssinOsat)
    let ab = 0
    for ( let i = 0 ; i < kurssinOsat.length ; i++ )
    { console.log(kurssinOsat[i].tehtavia)
      ab += kurssinOsat[i].tehtavia
    }
    return(ab)
}
            return (
                <div>
        <h1>{kurssi.nimi}</h1>
        
<ul>{kurssinOsat.map( (l) => <li key = {l.id} > { l.nimi + väli + l.tehtavia + väli + l.id } </li> )}</ul> 

<p>yhteensä tehtäviä {laske()} </p>
        </div>
    )
} 
export default Kurssi
/*
{notes.map(note=><Note key={note.id} note={note}/>)}
{kurssinOsat.map(note=><Kurssi key={note.id} note={note}/>)}
*/


/*

Half Stack -sovelluskehitys
Reactin perusteet 10 1
pussy 18 1
Reactin perusteet 10 1 1
Tiedonvälitys propseilla 7 2 2
Komponenttien tila 14 3 3
Reactin perusteet 10 1
Tiedonvälitys propseilla 7 2
Komponenttien tila 14 3
yhteensä tehtäviä 31

*/