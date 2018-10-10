import React from 'react'
// Osa 2 tehtävä 2.1
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

            return (
                <div>
        <h1>{kurssi.nimi}</h1>
        
<ul>{kurssinOsat.map( (l) => <li key = {l.id} > { l.nimi + väli + l.tehtavia + väli + l.id } </li> )}</ul> 


        </div>
    )
} 
export default Kurssi
