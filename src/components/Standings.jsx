import { useEffect, useState } from "react";

function Standings() {
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    getStandings();
  }, []);

  const getStandings = async () => {
    try {
      const api = await fetch(`https://v3.football.api-sports.io/teams/countries`, {
        method: 'GET',
        headers: {
          'x-apisports-key': import.meta.env.VITE_API_KEY,
        },
      });
      const data = await api.json();
      setStandings(data.response); 
    } catch (error) {
      console.error('Error fetching standings:', error);
    }
  };

  return (
    <>

    <div className="sticky"><h3>Countries: </h3> </div>
      
      <ul>
        {standings.map((country, index) => (
          <li key={index}>{country.name}</li> 
        ))}
      </ul>
    </>
  );
}

export default Standings;
