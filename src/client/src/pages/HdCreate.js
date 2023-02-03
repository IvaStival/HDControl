import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Panel from "../components/Panel";

import { useAddHdMutation } from "../store";

import Button from "../components/Button";

import './HdCreate.css';

const HdCreate = () => {
    const [inputs, setInputs] = useState({})
    const [addHd, results] = useAddHdMutation();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/")
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        addHd(inputs)
            .unwrap()
            .finally(() => {
                setInputs({})
                navigate('/')
            })
        
    }

    const handleOnChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        
        setInputs(values => ({...values, [name]:value}))
    }

    return (
        <Panel>
            <div className="hd-create-content">
                <h3>Create New HD</h3>
                
                <form onSubmit={handleSubmit}>
                    <label>
                        Title
                        <input 
                            type='text'
                            name="title"
                            value={inputs.title || ''}
                            onChange={handleOnChange}
                        />
                    </label>
                    <label>
                        Size
                        <input 
                            type='number'
                            name="size"
                            value={inputs.size || ''}
                            onChange={handleOnChange}
                        />
                    </label>
                    <label>
                        Code
                        <input 
                            type='text'
                            name="code"
                            value={inputs.code || ''}
                            onChange={handleOnChange}
                        />
                    </label>
                    
                </form>

                <div className="btns">
                        <Button secondary outline rounded onClick={handleClick}>Back</Button>
                        <Button className="btn-create" primary rounded onClick={handleSubmit}>Create</Button>
                </div>    
            </div>
        </Panel>
        
    );
};

export default HdCreate;