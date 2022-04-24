import React, { useState, useEffect } from "react";
import GuessAndWinContract from "./contracts/GuessAndWin.json";
import getWeb3 from "./getWeb3";
import "./App.css";
import { createContext } from "react";
import UserDisplay from "./Components/UserDisplay/UserDisplay.js";
import Game from "./Components/Game/Game";
import OwnerControl from "./Components/OwnerControl/OwnerControl";

export const ContractContext = createContext();

const App = () => {

  const [ContractVar, setContractVar] = useState({
    storageValue: [],
    web3: null,
    accounts: null,
    contract: null
  });
  const [state, setState] = useState();
  const [owner, setOwner] = useState();
  console.log(ContractVar);
  useEffect(() => {
    getContractVar();
    //getOwner();
    
    
  }, []);

  const getContractVar = async () => {

    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();
      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();
      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = GuessAndWinContract.networks[networkId];
      const instance = new web3.eth.Contract(
        GuessAndWinContract.abi,
        deployedNetwork && deployedNetwork.address,
        );
        const Owner = await instance.methods.owner().call();
        setOwner(Owner);
        setState(accounts[0]);
        // Set web3, accounts, and contract to the state, and then proceed with an
        // example of interacting with the contract's methods.
        setContractVar({web3, accounts, contract: instance });
      } catch (error) {
        // Catch any errors for any of the above operations.
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.`,
        );
        console.error(error);
      }
  };
  if(ContractVar.web3){
    return (
      <div className="body-container">
        <ContractContext.Provider value={{ ContractVar, setContractVar }}>
         <UserDisplay />
         <div id="content">
         <Game />
          {owner == state ? <OwnerControl /> : ""}
         </div>
        </ContractContext.Provider>
      </div>
      
    );
  }
  else{
    return (<>Loading Web3...</>)
  }
  
}

export default App;