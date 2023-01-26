import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAddHdMutation } from "../store";

import Button from "../components/Button";

const HdCreate = () => {
    const [inputs, setInputs] = useState({})
    const [addHd, results] = useAddHdMutation();
    const navigate = useNavigate();

    const input_class = "border w-80 h-8 m-1"

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
        <div className="mt-10">
            <h3 className="text-2xl">Create New HD</h3>
            
            <form className="flex flex-col mt-2" onSubmit={handleSubmit}>
                <label>
                    Title
                    <input 
                        type='text'
                        name="title"
                        value={inputs.title || ''}
                        onChange={handleOnChange}
                        className={input_class}
                    />
                </label>
                <label>
                    Size
                    <input 
                        type='number'
                        name="size"
                        value={inputs.size || ''}
                        onChange={handleOnChange}
                        className={input_class}
                    />
                </label>
                <label>
                    Code
                    <input 
                        type='text'
                        name="code"
                        value={inputs.code || ''}
                        onChange={handleOnChange}
                        className={input_class}
                    />
                </label>
                
            </form>

            <div className="flex flex-row mt-5 float-right">
                    <Button secondary outline rounded onClick={handleClick}>Back</Button>
                    <Button className="ml-1" primary rounded onClick={handleSubmit}>Create</Button>
            </div>    
            
            
            
        </div>
        
    );
};

export default HdCreate;