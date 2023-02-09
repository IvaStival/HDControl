import { useNavigate } from "react-router-dom";
import { useState } from 'react';

import Button from './Button'

import './Form.css';

const Form = ({isCreate, values={title: '', size: '', code: ''}, handleSubmit}) => {
    const [ inputs, setInputs ] = useState(values)
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        
        setInputs(values => ({...values, [name]:value}))
    }

    const handleClick = () => {
        navigate('/')
    }

    return (
        <div className="hd-create-content">
                <h3>{`${isCreate ? "Create New HD" : "Update HD"}`}</h3>
                
                <form onSubmit={handleSubmit}>
                    <label>
                        Title
                        <input 
                            type='text'
                            name="title"
                            value={inputs.title || ''}
                            onChange={handleOnChange}
                            placeholder="FFHD01"
                        />
                    </label>
                    <label>
                        Size
                        <input 
                            type='number'
                            name="size"
                            value={inputs.size || ''}
                            onChange={handleOnChange}
                            placeholder="4 TB"
                        />
                    </label>
                    <label>
                        Code
                        <input 
                            type='text'
                            name="code"
                            value={inputs.code || ''}
                            onChange={handleOnChange}
                            placeholder="NGA123"

                        />
                    </label>
                    
                </form>

                <div className="btns">
                        <Button secondary outline rounded onClick={handleClick}>Back</Button>
                        <Button className="btn-create" primary rounded onClick={(e) => handleSubmit(e, inputs)}>{`${isCreate ? "Create" : "Update"}`}</Button>
                </div>    
            </div>
    )
}

export default Form;