import React, { Component } from 'react';
import MyCard from "./MyCard";

class SidePanel extends Component {



render (){
    const panel = ["Julie","Kordel","Jimmy"];
    return (
        <div style={{ height: '100%', width: '380px', backgroundColor: '#fffff' }} >
       {panel.map(name => (<MyCard name={name}/>))}
        </div>
    );
}


}

export default SidePanel