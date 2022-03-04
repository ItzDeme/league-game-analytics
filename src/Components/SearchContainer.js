import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { playerPuuid } from "../ApiQueries/APILeague";
// import { getSummoner, getMatchesByID, playerPuuid } from "../ApiQueries/APILeague";


function SearchContainer({setPuuid, puuid, API_KEY, setMatchStats}) {
const [SummonerName , setSummonerName] = useState("");
const [playerSet, setPlayerSet] = useState(false);



    const setName = (e) =>{
        //set summoner name to what's typed in text field.
        var name = e.target.value;
        setSummonerName(name);
    }

    const GetSummonerInfo = (e) =>{
        e.preventDefault();


if(!playerSet){
     
  loadSummoner();
  setPlayerSet(!playerSet);
    }else{

      setPuuid("")
      loadSummoner();
    }

  

  }


  const loadSummoner = () =>{
    setMatchStats("");

    var APICallSummoner = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${SummonerName}?api_key=${API_KEY}`;

        //search for playter
    axios.get(APICallSummoner).then(function (response){
        //Get Successful Response
        
    
      const  playerPuuid = response.data.puuid;
        console.log("player ID retrieved");
        setPuuid(playerPuuid);
        
    }).catch( function (error){
        //Get Error
        console.log(error);
    })


  }






      // getSummoner(SummonerName);
      // setHandler();
        // getMatchesByID(playerPuuid);
    // }
    // const setHandler = () =>{
    //   setPuuid(playerPuuid);
    //   console.log(playerPuuid);
    // }


  return (
    <div className="SearchContainer">
      <header className="SearchContainer-header">
      
      <Form>
  <Form.Group className="mb-3" controlId="">
    <Form.Label>Summoner</Form.Label>
    <Form.Control type="text" onChange={setName} placeholder="Summoner" />
    <Form.Text className="text-muted" >
      Enter your Summoner Name
    </Form.Text>
  </Form.Group> 
  <Button variant="primary" onClick={GetSummonerInfo} type="submit">
    Submit
  </Button>
    </Form>

        
     
      </header>
    </div>
  );
}

export default SearchContainer;
