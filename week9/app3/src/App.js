import './App.css';
import React, {useState} from 'react'

//--------------------------------------------------------
// counter app

// function based (useState hook)


// function App() {

// 	const [count, setCount] = useState(0);

// 	const increase = () => {
// 		setCount(count + 1);
// 	}

// 	const decrease = () => {
// 		setCount(count - 1);
// 	}

// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<h1>{count}</h1>
// 				<button onClick={increase}>click</button>
// 			</header>
// 		</div>
// 	);
// }


// ------------------------------------------------------
// class based

// class App extends React.Component {
// 	constructor(){
// 		super();
// 		this.state = { count: 0 }
// 	}
// 	increase = () => {
// 		this.setState({count: this.count + 1});
// 	}

// 	decrease = () => {
// 		this.setState({count: this.count - 1});
// 	}

// 	render(){
// 		return (
// 			<div className="App">
// 				<header className="App-header">
// 					<h1>{this.state.count}</h1>
// 					<button onClick={this.increase}>increase</button>
// 					<button onClick={this.decrease}>decrease</button>
// 				</header>
// 			</div>
// 		);
// 	}
// }


// ------------------------------------------------------


function App(){

	const [inputs, setInputs] = useState({});
	const [errors, setErrors] = useState({});
	
	const handleChange = (event) =>{
		const name = event.target.name;
		const value = event.target.value;
		setInputs({ ...inputs, [name]: value })
		
		// define errors
		if (name === "username" && value.length < 5){
			// console.log(value.length);
			setErrors({ ...errors, [name]: "username cannot be smaller than 5"});
		}
		else if(name === "username" && value.length >= 5) {
			setErrors({ ...errors, [name]: ""});
		}
		document.getElementById('error').innerHTML = errors["username"];
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(inputs);
		console.log(errors);
	}

	return (
		<form onSubmit={ handleSubmit }>
			<label id="error"></label>
			<input type="text" name="username" placeholder="username" value={ inputs["username"] || "" } onChange={ handleChange }/>
			<input type="number" name="age" placeholder="age" value={ inputs["age"] || "" } onChange={ handleChange }/>
			<input type="submit"/>

		</form>
	)
}

export default App;
