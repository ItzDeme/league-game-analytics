import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Matches from "./Matches";

// import { getMatchesByID, matches, getMatcheInfo } from "../ApiQueries/APILeague";

function MatchStats({ matchStats }) {
const [champName, setChampName] = useState('');

console.log(matchStats);
  fetch('https://ddragon.leagueoflegends.com/cdn/12.5.1/data/en_US/champion.json')
  .then(response => response.json())
  .then(data => {
       const championList = data.data;
  
  var championId = matchStats.championId;
  
       for (var i in championList) {

      if (championList[i].key == championId) {

        setChampName(championList[i].id)
        console.log(championList[i].id)
      }
       }
});



const champIcon = `http://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/${champName}.png`;


  return (
    <div className="MatchStats col-lg-6">
      <header className="MatchStats-header">
        <img src={champIcon} alt={matchStats.championName}/>
        <p>
          {matchStats.championName}
        </p>
        
        <p>Kills: {matchStats.kills}</p>
        <p>Deaths: {matchStats.deaths}</p>
        <p>Assists: {matchStats.assists}</p>
        <p>Total Damage to Champions: {matchStats.totalDamageDealtToChampions}</p>
        <p>Largest Killing Spree: {matchStats.largestKillingSpree}</p>
        <p>Largest Multi-Kill: {matchStats.largestMultiKill}</p>
        <p>Skills Dodged: {typeof(matchStats.challenges) === 'undefined' ? "No Data." : matchStats.challenges.skillshotsDodged}</p>
        <p>Minions Killed: {matchStats.totalMinionsKilled}</p>
     
      </header>
    </div>
  );
}

export default MatchStats;