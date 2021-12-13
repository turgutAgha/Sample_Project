import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

	const api_key = 'gVmG2dOV9U0KZ7duLy3Eu5XKru6mn7jV'

	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const handleSeriesBookClick = (e) => {
		e.preventDefault();
		setIsLoading(true);

		axios.get(`https://api.nytimes.com/svc/books/v3/lists/series-books.json?api-key=${api_key}`)
		.then(datax => datax.data.results.books)
		.then(datax => setData(datax))
		.catch(error => console.log(error))
	};

	const handleHandcoverClick = (e) => {
		e.preventDefault();
		setIsLoading(true);

		axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${api_key}`)
		.then(datax => datax.data.results.books)
		.then(datax => setData(datax))
		.catch(error => console.log(error))
	}

	const handleBestSellerClick = (e) => {
		e.preventDefault();
		setIsLoading(true);

		axios.get(`https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=${api_key}`)
		.then(datax => datax.data.results)
		.then(datax => setData(datax))
		.catch(error => console.log(error))
	}

	useEffect(() => {
		if(data.length > 0){
			setIsLoading(false);
		}
		// console.log(data)
	}, [data]);

	return (
		<div className="container">
			<div className="header">
				<header>Book App</header>
			</div>
			<div className="buttons">
				<button class="but" onClick={handleSeriesBookClick}>Book Series</button>
				<button class="but" onClick={handleHandcoverClick}>HandCover</button>	
				<button class="but" onClick={handleBestSellerClick}>BestSeller</button>	
			</div>
			
			{(!isLoading) ?
				data.map((el) => (
					<div key={el.primary_isbn10}>
						<img src={el.book_image} alt=""/>
						<h2>{el.description}</h2>
					</div>
				)) : <h2>Loading...</h2>
			}
		</div>
	)
}


export default App;
