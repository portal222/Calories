import React, { Component } from 'react';


class KeyPadComponent extends Component { 
  render() {
    return (
        <div className="button">
  
   
          <button name="C" onClick={e => this.props.onClick(e.target.name)} label="C" value="clear" >C</button> 
          <button name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
          <button name="(" onClick={e => this.props.onClick(e.target.name)}>(</button>
          <button name=")" onClick={e => this.props.onClick(e.target.name)}>)</button>

          <button name="7" onClick={e => this.props.onClick(e.target.name)} label="7" value="7">7</button>  
          <button name="8" onClick={e => this.props.onClick(e.target.name)} label="8" value="8">8</button> 
          <button name="9" onClick={e => this.props.onClick(e.target.name)} label="9" value="9" >9</button>
          <button name="+" onClick={e => this.props.onClick(e.target.name)} label="+" size="2" value="+" >+</button> 

          <button name="4" onClick={e => this.props.onClick(e.target.name)} label="4" value="4">4</button>  
          <button name="5" onClick={e => this.props.onClick(e.target.name)} label="5" value="5" >5</button> 
          <button name="6" onClick={e => this.props.onClick(e.target.name)} label="6" value="6" >6</button> 
          <button name="-" onClick={e => this.props.onClick(e.target.name)} label="-" value="-">-</button>  

          <button name="1" onClick={e => this.props.onClick(e.target.name)} label="1" value="1" >1</button> 
          <button name="2" onClick={e => this.props.onClick(e.target.name)} label="2" value="2" >2</button> 
          <button name="3" onClick={e => this.props.onClick(e.target.name)} label="3" value="3" >3</button>
          <button name="*" onClick={e => this.props.onClick(e.target.name)} label="x" value="*" >*</button> 

          <button name="." onClick={e => this.props.onClick(e.target.name)} label="." value="." >.</button> 
          <button name="0" onClick={e => this.props.onClick(e.target.name)} label="0" value="0" >0</button> 
          <button name="=" onClick={e => this.props.onClick(e.target.name)} label="=" size="2" value="equal" >=</button> 
          <button name="/" onClick={e => this.props.onClick(e.target.name)} label="/" value="/" >/</button> 

       

      
      </div>
    )}
}
export default KeyPadComponent;