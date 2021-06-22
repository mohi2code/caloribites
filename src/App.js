import { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import BodyParameters from './components/BodyParameters'
import ActivityLevel from './components/ActivityLevel'
import Goal from './components/Goal'
import Pagination from "./components/Pagination";

import './styles/App.scss'
import './styles/components.scss'

export default function App(){

    const [page, setPage] = useState(0)

    return (
        <div id="app">
            <nav>
                <img alt="logo" src="/images/favicon.svg"/>
            </nav>
            <main>
                <Router>
                    <Switch>
                        <Route path="/input">
                            <InputRouter page={page} setPage={setPage} />
                        </Route>
                        <Route path="/results">
                            <Results page={page} setPage={setPage} />
                        </Route>
                        <Route path="/">
                            <InputRouter page={page} setPage={setPage} />
                        </Route>
                    </Switch>
                </Router>
            </main>
            <footer>
                <input type="button" value="Continue"/>
            </footer>
        </div>
    )
}

function InputRouter({ page, setPage }) {

    const { url } = useRouteMatch()

    return (
        <div className="input-container">
            <Pagination page={page} />
            <form>
                <Router>
                    <Switch>
                        <Route path={`${url}/body-parameters`}>
                            <BodyParameters setPage={setPage} />
                        </Route>
                        <Route path={`${url}/activity-level`}>
                            <ActivityLevel setPage={setPage} />
                        </Route>
                        <Route path={`${url}/goal`}>
                            <Goal setPage={setPage} />
                        </Route>
                        <Route path="/">
                            <BodyParameters setPage={setPage} />
                        </Route>
                    </Switch>
                </Router>
            </form>
        </div>
    )
}

function Results({ page, setPage }) {

    useEffect(() => setPage(3), [setPage])

    return (
        <div className="results-container">
            <h1>Results</h1>
        </div>
    )
}
