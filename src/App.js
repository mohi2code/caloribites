import { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
    useHistory
} from "react-router-dom";
import BodyParameters from './components/BodyParameters'
import ActivityLevel from './components/ActivityLevel'
import Goal from './components/Goal'
import Results from "./components/Results";
import Pagination from "./components/Pagination";
import { PrimaryButton, GrayButton } from './components/Buttons'

import './styles/App.scss'
import './styles/components.scss'

import { motion } from "framer-motion";

export default function App(){

    const history = useHistory()
    const [page, setPage] = useState(0)

    function footerButtonFactory() {
        if (page === 0)
            return (
                <PrimaryButton 
                    value="Continue" 
                    onClick={() => history.push('/input/activity-level')}
                />
            )
        else if(page == 1)
            return (
                <div className="two-buttons">
                    <GrayButton 
                        value="Back"
                        onClick={() => history.push('/input/body-parameters')}
                    />
                    <PrimaryButton 
                        value="Next"
                        onClick={() => history.push('/input/goal')}
                    />
                </div>
            )
        else if(page == 2)
            return (
                <div className="two-buttons">
                    <GrayButton 
                        value="Back"
                        onClick={() => history.push('/input/activity-level')}
                    />
                    <PrimaryButton 
                        value="Results"
                        onClick={() => history.push('/results')}
                    />
                </div>
            )
        else if(page == 3)
            return (
                <GrayButton 
                    value="Cleaer"
                    onClick={() => history.push('/input/body-parameters')}
                />
            )
    }

    return (
        <div id="app">
            <nav>
                <img alt="logo" src="/images/favicon.svg"/>
            </nav>
            <main>
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
            </main>
            <footer>
                { footerButtonFactory() }
            </footer>
        </div>
    )
}

function InputRouter({ page, setPage }) {

    const { url } = useRouteMatch()

    return (
        <div className="input-container">
            <Pagination page={page} />
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
        </div>
    )
}


