import './App.css';
import React, {useState} from 'react';
import MatchHistory from './Components/MatchHistory';
import SearchContainer from './Components/SearchContainer';
import MatchStats from './Components/MatchStats';



function App() {

const API_KEY = process.env.REACT_APP_API_KEY;


const [puuid, setPuuid] = useState("");
const [matchStats, setMatchStats] = useState("");

  return (
    <div className="App">
      <header className="App-header">
      <SearchContainer API_KEY={API_KEY} setMatchStats={setMatchStats} setPuuid = {setPuuid} puuid={puuid}/>
      <div className='container row'>
      {puuid != "" ? <MatchHistory  setMatchStats={setMatchStats} API_KEY={API_KEY} setPuuid={setPuuid} puuid={puuid}/> : <h1>No Player Data</h1>}
      {matchStats != "" ? <MatchStats  matchStats={matchStats} /> : <></> }
    </div>
   
        
     
      </header>
    </div>
  );
}

export default App;
