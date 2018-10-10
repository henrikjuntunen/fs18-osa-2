import React from 'react'
// Osa 2 tehtävä 2.3
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


const laske = () => {
    console.log('laske', kurssinOsat)
    let ab = 0
    for ( let i = 0 ; i < kurssinOsat.length ; i++ )
    { console.log(kurssinOsat[i].tehtavia)
      ab += kurssinOsat[i].tehtavia
    }
    return(ab)
}

const laske2 = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    console.log('laske2', kurssinOsat)
    const kurssinOsatT = kurssinOsat.map( (T) => T.tehtavia)
    console.log('laske2', kurssinOsatT)
    console.log('laske2', kurssinOsatT.reduce(reducer, 0))
return(kurssinOsatT.reduce(reducer, 0))
}

            return (
                <div>
        <h1>{kurssi.nimi}</h1>
        
<ul>{kurssinOsat.map( (l) => <li key = {l.id} > { l.nimi + väli + l.tehtavia + väli + l.id } </li> )}</ul> 

<p>yhteensä tehtäviä {laske()} </p>
<p>yhteensä reduce tehtäviä (T) {laske2()}</p>
        </div>
    )
} 
export default Kurssi
/*
{notes.map(note=><Note key={note.id} note={note}/>)}
{kurssinOsat.map(note=><Kurssi key={note.id} note={note}/>)}
*/