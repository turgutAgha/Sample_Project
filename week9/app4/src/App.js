import './App.css';
import React, {useState, useEffect, useRef, useReducer} from 'react';
import axios from 'axios';

// function App() {

// 	const [count, setCount] = useState(0);

// 	// running useEffect
// 	useEffect( ()=> {
// 		console.log('Running useEffect')
// 	}, []);

// 	// running useEffect with parameter
// 	useEffect( ()=> {
// 		console.log('Running useEffect with count')
// 	}, [count]);

// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<h1>Counter App</h1>
// 				<h1>{count}</h1>
// 				<button onClick={ ()=> setCount(count+1)}>Increment</button>
// 			</header>
// 		</div>
// 	);
// }

// function App() {

// 	const [data, setData] = useState([]);
// 	const [isLoading, setIsLoading] = useState(true);

// 	// running useEffect
// 	useEffect( ()=>{ 
// 		// effect
// 		const url = "https://randomuser.me/api/?results=5"
// 		fetch(url)
// 		.then((response) => response.json())
// 		.then((json) => setData(json.results))
// 		.catch((error) => console.log(error))
// 	}, [])


// 	// set loading to false
// 	useEffect(() =>{
// 		if(data.length > 0){
// 			setIsLoading(false);
// 		}
// 		console.log(data)
// 	}, [data])


// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<h1>API CALL</h1>

// 				{isLoading ? <h2>Loading...</h2> :
// 					data.map((el) => {
// 						return <h3 key={el.login.uuid}>{el.name.first} {el.name.last}</h3>	
// 					})
// 				}
// 			</header>
// 		</div>
// 	);
// }


// function App() {

// 	const [counter, setCounter] = useState(0);
// 	const [data, setData] = useState([]);
// 	const [isLoading, setIsLoading] = useState(false);

// 	// set loading to false
	
// 	const handleClick = () => {
// 		setIsLoading(true);
// 		axios.get(`https://randomuser.me/api/?results=${counter}`)
// 		.then(datax => datax.data)
// 		.then((json) => setData(json.results))
// 		.catch((error) => console.log(error))
// 	}

// 	useEffect(() =>{
// 		if(data.length > 0){
// 			setIsLoading(false);
// 		}
// 		console.log(data)
// 	}, [data])
	
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<h1>API CALL</h1>
// 				<input type="number" id="count" onChange={(event) => setCounter(event.target.value)}/>
// 				<button onClick={handleClick}>Submit</button>

// 				{(!isLoading) ? 
// 					data.map((el) => (
// 						<h3 key={el.login.uuid}>{el.key} {el.name.first} {el.name.last}</h3>)
// 					) : <h2>Loading...</h2>
// 				}
// 			</header>
// 		</div>
// 	);
// }


function App(){
	// const inputOneRef = useRef();
	// const inputTwoRef = useRef();

	// const handle = (e) => {
	// 	e.preventDefault();
	// 	const name1 = inputOneRef.current.name;
	// 	const name2 = inputTwoRef.current.name;
	// 	console.log(`${name1}: ${inputOneRef.current.value}, ${name2}: ${inputTwoRef.current.value}`)
	// }

	const initialValues = {
		firstName: '',
		lastName: '',
		email: '',
		age: '',
	}

	const [formValues, setFormValues] = useReducer(
		(curVals, newVals) => ({...curVals, ...newVals}), initialValues
	)

	function handleFormChange(e){
		e.preventDefault()
		const {name, value} = e.target;
		setFormValues({ [name] : value})
	}

	function handleValues(e){
		e.preventDefault()
		console.log(formValues)
	}

	return (
		<div>
			<h2>useReducer Hook</h2>
			<form>
				<input type="text" name="firstName" value={formValues.firstName} onChange={handleFormChange}/>
				<input type="text" name="lastName" value={formValues.lastName} onChange={handleFormChange}/>
				<input type="text" name="email" value={formValues.email} onChange={handleFormChange}/>
				<input type="text" name="age" value={formValues.age} onChange={handleFormChange}/>
				<button onClick={handleValues}>Click</button>
			</form>
		</div>
	)
}

export default App;
