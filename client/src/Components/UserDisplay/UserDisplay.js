import React, {useEffect, useState} from 'react'
import { useContext } from 'react'
import { ContractContext } from "../../App.js";
import "./UserDisplay.css";
export default function UserDisplay() {
  const context = useContext(ContractContext);
  const [state, setState] = useState();
  const [owner, setOwner] = useState();

  const getAccount = async () => {
    const accounts = await context.ContractVar.accounts;
    const Owner = await context.ContractVar.contract.methods.owner().call();
    setState(accounts[0]);
    setOwner(Owner);  
  }
  useEffect(() => {
    getAccount();
  }, [])
  
  return (
    <div id="userDisplay">
      <p><strong>User : </strong>{state}</p><img src={state == owner ? 'crown.png' : 'accept.png'}></img>
    </div>
  )
}
