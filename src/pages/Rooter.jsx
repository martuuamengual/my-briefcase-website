import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Landing from "src/pages/Landing";
import NotFound from "./NotFound";
import { Language } from '@react-lang/language';

export default function Rooter() {
    return (
        <Router>
            <Switch>
            <Route exact path="/">
                <Landing />
            </Route>
            <Route exact path="/es">
                <Language lang='es'>
                    <Landing />
                </Language>
            </Route>
            <Route exact path="/en">
                <Language lang='en'>
                    <Landing />
                </Language>
            </Route>
            <Route path="*">
                <NotFound />
            </Route>
            </Switch>
        </Router>
    );
}