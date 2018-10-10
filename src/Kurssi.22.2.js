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

const array1 = [ 1 , 2 , 3 , 4]
const array11 = [ {id:1 , nro:11 } , {id:2 , nro:22} ]
let array2 = array1.map( (luku) => luku * 2)
let array3 = array1.filter( (luku) => luku < 4)
let array4 = array1.find( (luku) => luku === 4 || luku === 3)

let array5a = [ { rivi:'x',id:1}]
let array5 =
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
// telia arris digiboksi vib503d uhb - teknicolor xdg 799 
// id: kurssinOsat.map( (l) => l.id )}
console.log('array1')
console.log(array1)
console.log(array2)
console.log(array3)
console.log(array4)
console.log(array5)
console.log('array11')
console.log(array11)
let as = 0
// Miten luodaan taulukko ja sille kentät ohjelmallisesti
            return (
                <div>
        <h1>{kurssi.nimi}</h1>
        <ul>
            
<li>
{kurssi.osat[0].nimi}{väli}{kurssi.osat[0].tehtavia}{väli}{kurssi.osat[0].id}
</li>

<li>pussy 18 1</li>
</ul>

<ul>{array5.map(  (r, i) => <li key = {i++} > { r + ' ' + i } </li> )}</ul>
        
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