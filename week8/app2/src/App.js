import './App.css';
import DynamicLinks from './DynamicLinks';
import UsersGpa from './UsersGpa';
import { array, list_of_links } from './Data'



function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>List of links</h1>
				{
					list_of_links.map(data => (
						<DynamicLinks key={data.id} link={data.link_name} href={data.href} />
					))
				}
				<hr></hr>

				<h1>GPAs</h1>
				{
					array.map(data => {
						return <UsersGpa name={data.name} surname={data.surname} major={data.major} gpa={data.gpa_score} />
					})
				}
			</header>
		</div>
	);
}

export default App;
