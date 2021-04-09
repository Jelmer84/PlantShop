import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import AboutUs from './pages/aboutUs/AboutUs';
import AllPlants from './pages/allPlants/AllPlants';


function App() {
  //   const [language, toggleLanguage] = useState('nl')
  //
  //   function setNl() {
  //       toggleLanguage('nl')
  //   }
  //   function setES() {
  //       toggleLanguage('es')
  //   }
  //   const data = {
  //       activeLanguage: language,
  //       setNlFunction: setNl,
  //       setESFunction: setES,
  // }

    return (

            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/about-us">
                        <AboutUs/>
                    </Route>
                    <Route path="/all-plants">
                        <AllPlants/>
                    </Route>
                </Switch>
            </Router>

    );
}

export default App;


// ## Stappenplan
// **Benodigdheden**:
// * context (`LanguageContext`)
// * in die context beschikbaar: de geselecteerde taal ("nl" / "es")
// * in die context beschikbaar: taal-verander functie (`toggleLanguage`) zodat we vanuit de header kunnen wisselen

// X 1. `LanguageContext` maken (in apart bestandje) en exporteren
// X 2. `LanguageContext` importeren in `App.js`
// X 3. We maken gebruik van de `LanguageContext.Provider` en wikkelen dit als component om alle componenten in `App.js` heen
// X 4. Via de `value` property een data object in de context plaatsen (`const data = { test: "test" }`)
// X 5. Kies een pagina en abonneer die op onze `LanguageContext`.
// X * Importeer de `LanguageContext`
// X * `useContext` functie importeren uit React en aanroepen met de `LanguageContext`
// X * We desctructuren de `test` property uit het object die we nodig hebben!
// X * Gebruik de data die in `test` staat in het component: `<p>{test}</p>` of in een `console.log(test)`
// X 6. Werkt dit? Top! Dan kunnen we verder!
// X 7. Maak op de plek waar jouw data object staat (`App.js`) een stukje state aan voor `language, toggleLanguage`
// X 8. Maak daar (`App.js`) een aparte functie die bij aanroep (doormiddel van de `toggleLanguage`-functie) de taal op Nederlands zet
// X 9. Maak daar (`App.js`) een aparte functie die bij aanroep (doormiddel van de `toggleLanguage`-functie) de taal op Spaans zet
// X 10. Stop de twee functies én `language` in dat data object
//     ```javascript
// const [language, toggleLanguage] = useState('nl');
// function setNl() {
//     toggleLanguage('nl')
// }
// function setEs() {
//     toggleLanguage('es')
// }
// const data = {
//     activeLanguage: language,
//     setNlFunction: setNl,
//     setEsFunction: setEs,
// }
// ```
// X 11. Test of je de actieve taal vanuit een pagina uit de context kunt halen en in de console kunt loggen! (zoals stap 4)
// X 12. Zorg ervoor dat op iedere pagina de juiste content wordt weergeven op basis van de actieve taal
// X 13. Zorg ervoor dat je met een knopje in de header van taal kunt wisselen
// X 14. (en dat er dus ook een andere vlag wordt weergegeven)
// X 15. Maak een apart component van de Provider!
// X * Kopieer de hele `function App()` uit `App.js` en plak dit in het context bestand
// X * Verander de naam `App` naar `LanguageContextProvider` en voeg de children property toe
// X * Vervang de huidige componten in deze functie door de children property
// X * Exporteer deze functie
// X * Wikkel het nieuwe `LanguageContextProvider` component om `<App />` in `index.js`