import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Matches from "./Matches";
// import { getMatchesByID, matches, getMatcheInfo } from "../ApiQueries/APILeague";

function MatchHistory({puuid , setPuuid, API_KEY, setMatchStats }) {
const [matchList, setMatchList] = useState([]);



useEffect(() => {

  if (matchList.length === 0){
    loadMatches();
  }
    // Update the document title using the browser API
  //  const tenMatches = getMatchesByID(puuid);
  //   setMatchList(tenMatches);
  //   console.log(matchList);
  }, [puuid]);


  const loadMatches = () =>{
    var APICallMatchIDS = `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?api_key=${API_KEY}&count=10`;
    //search for playter
axios.get(APICallMatchIDS).then(function (response){
    //Get Successful Response
   const matches = response.data;
      setMatchList(matches);
}).catch( function (error){
    //Get Error
    console.log(error);
});
  }


  return (
    <div className="MatchHistory col-lg-4">
      <header className="MatchHistory-header">

        <p>
          Match History
        </p>
        {matchList.map((match) => {
            console.log(match);
           return <Matches setMatchStats={setMatchStats} API_KEY={API_KEY} match={match} puuid={puuid} key={match}/>
        })}
        
     
      </header>
    </div>
  );
}

export default MatchHistory;
