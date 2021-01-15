import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import App from "src/App";
  
export default function Rooter() {
    return (
        <Router>
            <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/users">
                <Users />
            </Route>
            <Route exact path="/">
                <App />
            </Route>
            <Route path="*">
                <NotMatch />
            </Route>
            </Switch>
        </Router>
    );
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

function NotMatch() {
    return <h2>ERROR!!! 404</h2>;
}