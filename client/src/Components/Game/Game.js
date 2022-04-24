import React from 'react'
import PrizeDisplay from './PrizeDisplay/PrizeDisplay'
import "./Game.css"
import Proposition from './Proposition/Proposition'
import Hint from './Hint/Hint'
import { useContext, useState, useEffect} from 'react'
import { ContractContext } from "../../App.js";
export default function Game() {
  const context = useContext(ContractContext);
  const [state, setState] = useState({
    filter: {
      _winner: [context.ContractVar.accounts[0]],   //Only get events where transfer value was 1000 or 1337
      //from:context.ContractVar.accounts[0]
    },
    fromBlock: 0,                  //Number || "earliest" || "pending" || "latest"
    toBlock: 'latest'
  });
  
  const reloadPrize = (value) => {
     setState({
      filter: {
        _winner: [context.ContractVar.accounts[0]],   //Only get events where transfer value was 1000 or 1337
        //from:context.ContractVar.accounts[0]
      },
      fromBlock: value.blockNumber + 1,                  //Number || "earliest" || "pending" || "latest"
      toBlock: 'latest'
    }) 
    alert('You won')
  }
  
  context.ContractVar.contract.events.win(state)
    .on('data', event => reloadPrize(event))
    .on('changed', changed => console.log(changed))
    .on('error', err => console.log(err))
    .on('connected', str => console.log(str))
    /* context.ContractVar.contract.getPastEvents('win', options)
    .then(results => console.log(results))
    .catch(err => console.log(err)); */
    //if(!state){
      return (
        <div id="game">
            <PrizeDisplay />
            <Proposition />
            <Hint />
        </div>
      )
    //}
    /* else{
      return(
      <div id='game'>
        <h1>Congratulations, you find the word</h1>
      </div>
      )
    } */
  
}
