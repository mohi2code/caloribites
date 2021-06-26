import { useState } from "react";
import {
    Switch,
    Route,
    useRouteMatch,
    useHistory,
    useLocation
} from "react-router-dom";
import Loading from "./components/Loading";
import BodyParameters from './components/BodyParameters'
import ActivityLevel from './components/ActivityLevel'
import Goal from './components/Goal'
import Results from "./components/Results";
import Pagination from "./components/Pagination";
import { PrimaryButton, GrayButton } from './components/Buttons'

import Calculator from './Calculator'

import './styles/App.scss'
import './styles/components.scss'

import { AnimatePresence } from "framer-motion";

export default function App(){

    const history = useHistory()
    const location = useLocation()

    const [page, setPage] = useState(0)

    const [weight, setWeight] = useState(0)
    const [bodyfat, setBodyFat] = useState(0)
    const [activityLevel, setActivityLevel] = useState(-1)
    const [goal, setGoal] = useState(-1)

    function footerButtonFactory() {
        if (page === 0)
            return (
                <PrimaryButton 
                    value="Continue" 
                    onClick={() => history.push('/input/activity-level')}
                />
            )
        else if(page === 1)
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
        else if(page === 2)
            return (
                <div className="two-buttons">
                    <GrayButton 
                        value="Back"
                        onClick={() => history.push('/input/activity-level')}
                    />
                    <PrimaryButton 
                        value="Results"
                        onClick={showResults}
                    />
                </div>
            )
        else if(page === 3)
            return (
                <GrayButton 
                    value="Clear"
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
                <AnimatePresence exitBeforeEnter>
                    <Switch location={location} key={location.pathname}>
                        <Route path="/input">
                            <InputRouter 
                                page={page} setPage={setPage}
                                weight={weight} setWeight={setWeight} 
                                bodyfat={bodyfat} setBodyFat={setBodyFat} 
                                activityLevel={activityLevel} setActivityLevel={setActivityLevel}
                                goal={goal} setGoal={setGoal}
                             />
                        </Route>
                        <Route path="/results">
                            <Results page={page} setPage={setPage} />
                        </Route>
                        <Route path="/">
                            <Loading />
                        </Route>
                    </Switch>
                </AnimatePresence>
            </main>
            <footer>
                <div className="buttons-container container">
                    { footerButtonFactory() }
                </div>
            </footer>
        </div>
    )

    function showResults(e){
        const calc = Calculator({ 
            weight, bodyfat, 
            activityLevel: activityLevelToIndex(), 
            goal: goalToIndex() 
        })
        history.push('/results', {
            protein: calc.getProteinGrams(),
            fats: calc.getFatsGrams(),
            carbs: calc.getCarbsGrams(),
            total: calc.getTotalCalories()
        })

        function activityLevelToIndex() {
            if (activityLevel === 0)
            return 13
        else if (activityLevel === 1)
            return 14.5
        else if (activityLevel === 2)
            return 15.5
        else if (activityLevel === 3)
            return 17
        else 
            return 14.5
        }

        function goalToIndex() {
            if (goal === 0)
            return 0
        else if (goal === 1)
            return 1
        else if (goal === 2)
            return 2
        else 
            return 1
        }
    }
}

function InputRouter({ 
    page, setPage, 
    weight, setWeight, 
    bodyfat, setBodyFat, 
    activityLevel, setActivityLevel, 
    goal, setGoal 
}) {

    const { url } = useRouteMatch()

    return (
        <div className="input-container container">
            <Pagination page={page} />
            <Switch>
                <Route path={`${url}/body-parameters`}>
                    <BodyParameters 
                        setPage={setPage} 
                        weight={weight} setWeight={setWeight} 
                        bodyfat={bodyfat} setBodyFat={setBodyFat} 
                    />
                </Route>
                <Route path={`${url}/activity-level`}>
                    <ActivityLevel 
                        setPage={setPage}
                        activityLevel={activityLevel}
                        setActivityLevel={setActivityLevel}
                     />
                </Route>
                <Route path={`${url}/goal`}>
                    <Goal 
                        setPage={setPage} 
                        goal={goal} setGoal={setGoal}
                    />
                </Route>
                <Route path="/">
                    <BodyParameters 
                         setPage={setPage} 
                         weight={weight} setWeight={setWeight} 
                         bodyfat={bodyfat} setBodyFat={setBodyFat} 
                    />
                </Route>
            </Switch>
        </div>
    )
}


