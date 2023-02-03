import { useState, useEffect } from "react";

const PythonExec = () => {
    const [result, setupResult] = useState({})

    useEffect(() => {
        fetch('http://127.0.0.1:5000/data', {
                    'methods':'GET',
                    headers : {
                        'Content-Type':'application/json'
                    }
                })
                .then((res) => res.json())
                .then((res) => setupResult(res))
                .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <h1>React and Flask test</h1>
            <div>{result.result}</div>
        </div>
    );
};

export default PythonExec