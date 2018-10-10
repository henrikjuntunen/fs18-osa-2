import React from 'react'
import Kurssi from './Kurssi24'
// Osa2 tehtävä 2.4
// Osa2 tehtävä 2.5
const App24 = () => {

  
      const kurssi = [
      {
        nimi: 'Half Stack -sovelluskehitys',
        id: 1,
        osat: [
          {
            nimi: 'Reactin perusteet',
            tehtavia: 10,
            id: 1
          },
          {
            nimi: 'Tiedonvälitys propseilla',
            tehtavia: 7,
            id: 2
          },
          {
            nimi: 'Komponenttien tila',
            tehtavia: 14,
            id: 3
          },
          {
            nimi: 'Reduce perusteet',
            tehtavia: 5,
            id: 4
          }
        ]
      },
      {
        nimi: 'Node.js',
        id: 2,
        osat: [
          {
            nimi: 'Routing',
            tehtavia: 3,
            id: 1
          },
          {
            nimi: 'Middlewaret',
            tehtavia: 7,
            id: 2
          }
        ]
      }
      ]
    

  return (
      <div>
        <Kurssi kurssiTa={kurssi} />
      </div>
    )
  }

  export default App24