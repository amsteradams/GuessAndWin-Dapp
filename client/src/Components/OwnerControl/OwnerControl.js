import React from 'react';
import ChangeWord from './ChangeWord/ChangeWord';
import "./OwnerControl.css";
export default function OwnerControl() {
  return (
    <div id="ownerControl">
      <h2>Owner settings<img src="gear.png"/></h2>
      <ChangeWord />
    </div>
  )
}
