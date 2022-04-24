import React from 'react'
import "./Hint.css";
import { useContext, useState, useEffect} from 'react'
import { ContractContext } from "../../../App.js";
export default function Hint() {
    const context = useContext(ContractContext);
    const [state, setState] = useState();
    const [toggle, setToggle] = useState(false);
    const getHint = async () => {
        const hint = await context.ContractVar.contract.methods.hint().call();
        setState(hint);
    }
    const discover = () => {
        setToggle(!toggle)
    }
    useEffect(() => {
      getHint();
    }, [])
    
    if(!toggle){
        return (
          <div id="hint">
              <button id="open" onClick={discover}>Get a hint</button>
          </div>
        )
    }
    else{
        return(
            <div id="hint">
                <p>{state}</p>
                <button onClick={discover} id="close">x</button>
            </div>
        )
    }
}
