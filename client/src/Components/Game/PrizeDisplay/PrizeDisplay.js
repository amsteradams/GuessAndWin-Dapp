import React from 'react'
import { useContext, useState, useEffect} from 'react'
import { ContractContext } from "../../../App.js";
import "./PrizeDisplay.css";
export default function PrizeDisplay() {
    const context = useContext(ContractContext);
    const [state, setState] = useState();

    const getPrize = async () => {
        const prize = await context.ContractVar.contract.methods.seePrize().call();
        setState(prize);
    }

    useEffect(() => {
        getPrize();
    }, [])
    
  return (
    <div id="prizeDisplay">
        <img src="trophy.png"/>{state / (1*10**18)} eth 
    </div>
  )
}
