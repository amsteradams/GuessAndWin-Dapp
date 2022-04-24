import React, {useState, useEffect} from 'react';
import {useContext} from 'react'
import { ContractContext } from '../../../App';
import "./ChangeWord.css";
export default function ChangeWord() {
    const context = useContext(ContractContext);
    const [toggle, setToggle] = useState(false);
    const [state1, setState1] = useState();
    const [state2, setState2] = useState();

    const setNewWord = async () => {
        await context.ContractVar.contract.methods.changeWord(state2, state1).send({from:context.ContractVar.accounts[0]});
    }
    const linkedInput1 = (e) => {
        setState1(e);
    }

    const linkedInput2 = (e) => {
        setState2(e);
    }
    const discover = () => {
        setToggle(!toggle);
    }

    if(!toggle){
        return (
            <div id="changeWord">
                <button onClick={discover}>Change the word</button>
            </div>
        )
    }
    else{
        return (
            <div id="changeWord">
                <button id="closeBtn" onClick={discover}>x</button>
                <form>
                    <input onInput={e => linkedInput1(e.target.value)} type="text" placeholder='New hint'/>
                    <input onInput={e => linkedInput2(e.target.value)} type="text" placeholder='New word'/>
                    <button onClick={setNewWord} type="submit">Set</button>
                </form>
            </div>
        )
    }
}
