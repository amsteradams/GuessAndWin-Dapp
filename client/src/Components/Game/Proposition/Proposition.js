import React from 'react'
import {useState} from "react";
import {useContext} from 'react'
import "./Proposition.css";
import { ContractContext } from '../../../App';
export default function Proposition() {
    const [state, setState] = useState();
    const context = useContext(ContractContext);
    const propose = async () => {
        await context.ContractVar.contract.methods.proposeWord(state).send({from:context.ContractVar.accounts[0], value:1*10**18});
    }
    const linkedInput = (e) => {
        setState(e);
    }
    
    const addProposal = () => {
        propose();
    }
    
  return (
    <form id="proposition">
        <input onInput={e => linkedInput(e.target.value)} type="text" placeholder='Proposal'/>
        <button onClick={addProposal} type="submit">Try</button>
    </form>
  )
}
