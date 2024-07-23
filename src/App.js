
import BlogDetails from './BlogDetails';
import Create from './Create';
import Navbar from './Navbar';
import NotFound from './NotFound';
import Home from './home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

	return (
		<Router>
			<div className="App">
				<Navbar/>
				<div className="content">
					<Switch>
						<Route exact path="/">
							<Home></Home>
						</Route>
						<Route path="/create">
							<Create></Create>
						</Route>
						<Route path="/blogs/:id">
							<BlogDetails/>
						</Route>
						<Route path="*">
							<NotFound/>
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
