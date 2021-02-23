import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Landing from "src/pages/Landing";
import NotFound from "./NotFound";

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
                <Landing lang='en' />
            </Route>
            <Route exact path="/es">
                <Landing lang='es' />
            </Route>
            <Route exact path="/en">
                <Landing lang='en' />
            </Route>
            <Route path="*">
                <NotFound />
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