import React from 'react'
// Osa 2 tehtävä 2.1 ja 2.2 ja 2.3 tiedostot
import Kurssi from './Kurssi.21.2'
//import Kurssi from './components/Kurssi.22.2'
//import Kurssi from './components/Kurssi.23.2'

const App21 = () => {
    const kurssi = {
      nimi: 'Half Stack -sovelluskehitys',
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
          nimi: 'Reduce ',
          tehtavia: 6,
          id: 4
        },
        {
          nimi: 'Reduce jatko',
          tehtavia: 16,
          id: 5
        }
      ]
    }

    return (
      <div>
        <Kurssi kurssi={kurssi} />
      </div>
    )
  }

  export default App21