import { useRouteMatch, Route, Switch } from 'react-router'
import BodyParameters from '../components/BodyParameters'
import ActivityLevel from '../components/ActivityLevel'
import Goal from '../components/Goal'
import Pagination from '../components/Pagination'

export default function InputRouter({ 
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