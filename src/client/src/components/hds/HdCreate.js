import React from "react";
import HdForm from "./HdForm";
 
import { createHd } from '../../actions';
import { connect } from 'react-redux'; 

class HdCreate extends React.Component{

    onSubmit = (formValues) =>{
        console.log(formValues)
        this.props.createHd({...formValues, location: "Fantastica"})
    }

    render(){
        return (<div style={{"paddingInline": '100px'}}>
            <h3>Create HD</h3>
            <HdForm onSubmit={this.onSubmit}/>
        </div>);
    }
}

export default connect(null, { createHd })(HdCreate);