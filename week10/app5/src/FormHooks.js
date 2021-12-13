import React, {useState, useRef, useReducer} from 'react'

export function FormUseState() {
    const [inputs, setInputs] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputs({...inputs, [name]: value});
    }

    const handleClick = (e) => {
        e.preventDefault();
        console.log(inputs);
    }

    return (
        <div>
            <form>
                <input type='text' name='name' placeholder='name' onChange={handleChange} />
                <input type='text' name='surname' placeholder='surname' onChange={handleChange} />
                <input type='number' name='age' placeholder='age' onChange={handleChange} />
                <button onClick={handleClick}>SUBMIT</button>
            </form>
        </div>
    )
}

export function FormUseRef() {
    const inputsRef = useRef({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        inputsRef.current = {...inputsRef.current, [name]: value};
    }

    const handleClick = (e) => {
        e.preventDefault();
        console.log(inputsRef.current);
    }

    return (
        <div>
            <form>
                <input type='text' name='name' placeholder='name' onChange={handleChange} />
                <input type='text' name='surname' placeholder='surname' onChange={handleChange} />
                <input type='number' name='age' placeholder='age' onChange={handleChange} />
                <button onClick={handleClick}>SUBMIT</button>
            </form>
        </div>
    )
}

export function FormUseReducer() {
    const initialValues = {
        name: '',
        surname: '',
        age: ''
    }

    const reducer = (state, action) => {
        return {...state, ...action}
    }

    const [inputs, dispatch] = useReducer(reducer, initialValues);

    const handleChange = (e) => {
        const {name, value} = e.target;
        dispatch({[name]: value});
    }

    const handleClick = (e) => {
        e.preventDefault();
        console.log(inputs);
    }


    return (
        <div>
            <form>
                <input type='text' name='name' placeholder='name' onChange={handleChange} />
                <input type='text' name='surname' placeholder='surname' onChange={handleChange} />
                <input type='number' name='age' placeholder='age' onChange={handleChange} />
                <button onClick={handleClick}>SUBMIT</button>
            </form>
        </div>
    )
}
