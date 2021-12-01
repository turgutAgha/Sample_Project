import './App.css';
import React, {useState, useEffect} from 'react';


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

function App() {

	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	// running useEffect
	useEffect( ()=>{ 
		// effect
		const url = "https://randomuser.me/api/?results=5"
		fetch(url)
		.then((response) => response.json())
		.then((json) => setData(json.results))
		.catch((error) => console.log(error))
	}, [])


	// set loading to false
	useEffect(() =>{
		if(data.length > 0){
			setIsLoading(false);
		}
		console.log(data)
	}, [data])


	return (
		<div className="App">
			<header className="App-header">
				<h1>API CALL</h1>

				{isLoading ? <h2>Loading...</h2> :
					data.map((el) => {
						return <h3 key={el.login.uuid}>{el.name.first} {el.name.last}</h3>	
					})
				}
			</header>
		</div>
	);
}


export default App;
