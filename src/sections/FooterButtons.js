import { useHistory } from 'react-router-dom'
import { PrimaryButton, GrayButton } from '../components/Buttons'

export default function FooterButton({ page, showResults, clear }) {

    const history = useHistory()

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