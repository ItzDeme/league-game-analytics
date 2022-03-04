import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
// import { getMatcheInfo } from "../ApiQueries/APILeague";

function Matches({match, puuid, API_KEY, setMatchStats}) {
const [matchInfo, setMatchInfo] = useState({});

    
  
    useEffect(() => {

      if (Object.keys(matchInfo).length === 0){
        loadMatch();
        
      }
      
        // Update the document title using the browser API
      //  const tenMatches = getMatchesByID(puuid);
      //   setMatchList(tenMatches);
      //   console.log(matchList);
      }, []);
      const loadStats = () =>{
        setMatchStats(matchInfo);
        console.log("we're clicking!! " + matchInfo.championName);
        
      }

      const loadMatch = () =>{
        var APICallMatchInfo = `https://americas.api.riotgames.com/lol/match/v5/matches/${match}?api_key=${API_KEY}`;
        
            //search for playter
        axios.get(APICallMatchInfo).then(function (response){
            //Get Successful Response
            
            //gives the array of participants
        const playerMatchInfoIndex = response.data.info.participants;

        //finds the index of the player from the current match -- searches by the puuid
         const index = playerMatchInfoIndex.findIndex(object => {
             return object.puuid === puuid;
         })
        // console.log(playerMatchInfoIndex);
        setMatchInfo(playerMatchInfoIndex[index]);
         console.log(playerMatchInfoIndex[index]);
         
        }).catch( function (error){
            //Get Error
            console.log(error);
        })
        
      }



  return (
    <div className="Matches">
      <header className="Matches-header">
        <div onClick={()=> loadStats()}>
          <p style={{color : !matchInfo.win ? 'red' : 'green'}}>
              {matchInfo.championName} {matchInfo.kills}/{matchInfo.deaths}/{matchInfo.assists}
          </p>
   
        
        </div>
      </header>
    </div>
  );
}

export default Matches;