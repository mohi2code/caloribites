import { useHistory } from 'react-router-dom'
import { PrimaryButton, GrayButton } from '../components/Buttons'

export default function FooterButton({ page, showResults, clear, data }) {

    const history = useHistory()

    if (page === 0)
        return (
            <PrimaryButton 
                value="Continue" 
                onClick={() => {
                    if (!data.weight || !data.bodyfat)
                        return
                    history.push('/input/activity-level')
                }}
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
                    onClick={() => {
                        if (data.activityLevel == -1 || !data.activityLevel)
                            return
                        history.push('/input/goal')
                    }}
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
                    onClick={() => {
                        if (data.goal == -1 || !data.goal)
                            return
                        showResults()
                    }}
                />
            </div>
        )
    else if(page === 3)
        return (
            <GrayButton 
                value="Clear"
                onClick={clear}
            />
        )
    else if(page === 4)
        return (
            <GrayButton 
                value="Clear"
                onClick={clear}
            />
        )
}