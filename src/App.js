import Input from './components/Input'
import Select from './components/Select'
import Button from './components/Button'

import './styles/App.scss'
import './styles/components.scss'

export default function App() {
    return (
        <div id="main-container">
            <nav>
                <header>
                    <img src="/images/favicon.svg" alt="logo"/>
                </header>
            </nav>

            <main>
                <div>
                    <img src="/images/logo-dark-transparent.png" alt="logo"/>
                </div>

                <div>
                    <form>
                        <h2>Body Parameters</h2>
                        <div className="text-fields">
                            <Input type="number" placeholder="Weight" tag="KG"/>
                            <Input type="number" placeholder="Bodyfat" tag="%"/>
                        </div>
                        <h2>Activity Level</h2>
                        <Select>
                            {["Low", "Medium", "High", "Very High"]}
                        </Select>
                        <h2>Goal</h2>
                        <Select>
                            {["Lose", "Maintain", "Gain"]}
                        </Select>
                        <div className="buttons-wrapper">
                            <Button type="link">Clear</Button>
                            <Button>Calculate</Button>
                        </div>
                    </form>
                </div>
            </main>            
        </div>
    )
}
