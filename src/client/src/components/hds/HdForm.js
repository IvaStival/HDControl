import React from "react";

import { Form, Field } from 'react-final-form';

const HdForm = (props) => {

    const renderError = ({error, touched}) => {
        if(touched && error){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    const renderInput = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete='off'/>
                {renderError(meta)}
            </div>
        );
    }

    const onSubmit = (formValues) => {
        
        props.onSubmit(formValues)
    }

    return (
        <Form
            initialValues={props.initialValues}
            onSubmit={onSubmit}
            validate={(formValues) => {
                const errors = {};

                if(!formValues.name){
                    errors.name = "You must enter a name!"
                }

                if(!formValues.hd_size){
                    errors.hd_size = "You must enter a size!"
                }

                if(!formValues.code){
                    errors.size = "You must enter a code!"
                }

                return errors;
            }}
            render={({ handleSubmit }) => {
                return (
                    <form onSubmit={handleSubmit} className='ui form error'>
                        <Field name='name' component={renderInput} label='Enter Hd name'/>
                        <Field name='hd_size' component={renderInput} label='Enter Size'/>
                        <Field name='code' component={renderInput} label='Enter code'/>
                        <button className="ui button primary">Submit</button>
                    </form>
                );
            }}
        />
    )
}

export default HdForm;