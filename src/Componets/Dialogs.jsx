import React from "react";
import { NavLink } from "react-router-dom";
import './Dialogs.css';

const DialogsList = (props) => {

  let path = "/dialog/"  + (props.id);

  return (
    <div className="dialog__name"><NavLink to={path}>{props.name}</NavLink></div>

  );
}

const Dialogs = (props) => {
    return (
        <div className="dialogs">
                <div className="dialog__item">
                  <div className="dialog">
                    <DialogsList name="Sergey" id= '1'/>
                    <DialogsList name="Vasay" id="2"/>
                    <DialogsList name="Sasha" id="3"/>
                    <DialogsList name="Misha" id="4"/>
                    <DialogsList name="Victor" id="5"/>
                    <DialogsList name="Valera" id="6"/>

                  </div>
                  <div className="messages">

                  </div>
                    
                </div>
                
            </div>
    );
}

export default Dialogs;