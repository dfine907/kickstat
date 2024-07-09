import './App.css';
import Pages from './pages/Pages';


function App() {
  return (
    <> 
    <div className='App'></div>
    <h1>Soccer Teams ⚽️</h1>
    <Pages />
    </>
  )
}

export default App








// import { useEffect } from 'react';

// const API_KEY = '9af292c029d2296f96be2a30043cee68';

// function App() {
//   useEffect(() => {
//     // Make the API request to get the team information
//     fetch('https://v3.football.api-sports.io/teams?id=30', {
//       method: 'GET',
//       headers: {
//         'x-apisports-key': API_KEY,
//         'x-rapidapi-host': 'v3.football.api-sports.io'  // Ensure this header is necessary for your API, sometimes it's not required.
//       }
//     })
//       .then(response => response.json())
//       .then(data => {
//         // Log the response to the console
//         console.log(data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <>
//       <h1>Favorite Teams ⚽️</h1>
//     </>
//   );
// }

// export default App;
