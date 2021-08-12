import { useState } from "react";
import {
    Switch,
    Route,
    useHistory,
    useLocation
} from "react-router-dom";
import Loading from "./components/Loading";
import InputRouter from "./sections/InputRouter";
import FooterButton from "./sections/FooterButtons";
import Results from "./components/Results";
import AllVideos from "./components/AllVideos";

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
                        <Route path="/videos">
                            <AllVideos page={page} setPage={setPage} />
                        </Route>
                        <Route path="/">
                            <Loading />
                        </Route>
                    </Switch>
                </AnimatePresence>
            </main>
            <footer>
                <div className="buttons-container container">
                    <FooterButton page={page} showResults={showResults} clear={clear} />
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
            total: calc.getTotalCalories(),
            goal
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

    function clear() {
        setWeight(0)
        setBodyFat(0)
        setActivityLevel(-1)
        setGoal(-1)
        history.push('/input/body-parameters')
    }
}
