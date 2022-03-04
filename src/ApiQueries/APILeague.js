import axios from "axios";

export var playerPuuid ;

export var matches ;

const API_KEY = "RGAPI-97eef136-284a-48c8-9a39-01923e22eded";

export function getSummoner (searchText){

var APICallSummoner = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${searchText}?api_key=${API_KEY}`;

    //search for playter
axios.get(APICallSummoner).then(function (response){
    //Get Successful Response
    

    playerPuuid = response.data.puuid;
    console.log("player ID retrieved");
    return playerPuuid;
}).catch( function (error){
    //Get Error
    console.log(error);
})

  
}

export function getMatchesByID (puuid){

    var APICallMatchIDS = `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?api_key=${API_KEY}&count=10`;
    
        //search for playter
    axios.get(APICallMatchIDS).then(function (response){
        //Get Successful Response
       
        matches = response.data;
        
        console.log("matches retrieved");
        return matches;
    }).catch( function (error){
        //Get Error
        console.log(error);
    })
    
      
    }

    export function getMatcheInfo (match){

        var APICallMatchInfo = `https://americas.api.riotgames.com/lol/match/v5/matches/${match}?api_key=${API_KEY}`;
        
            //search for playter
        axios.get(APICallMatchInfo).then(function (response){
            //Get Successful Response
            
            console.log(playerPuuid);
        const playerMatchInfoIndex = response.data.info.participants;
         const index = playerMatchInfoIndex.findIndex(object => {
             return object.puuid === playerPuuid;
         })
        // console.log(playerMatchInfoIndex);
        console.log(playerMatchInfoIndex[index]);
     

        }).catch( function (error){
            //Get Error
            console.log(error);
        })
        
          
        }