import Navbar from './components/Navbar'
import { PrimaryButton } from './components/Buttons'
import { useHistory } from 'react-router-dom'

export default function Home() {

    const history = useHistory()

    return (
        <div id="landing">
            <section className="hero">
                <nav>
                    <Navbar />
                </nav>
                <div className="content responsive-container">
                    <div className="left">
                        <div className="display">
                            <h1>Caloribites</h1>
                            {/* <img alt="logo" src="/images/favicon.svg"/> */}
                        </div>
                        <p>ever wondered how many calories you need a day</p>
                        <PrimaryButton value="Let's find out   >" onClick={() => history.push('/loading')}/>
                    </div>
                    <div className="right">
                        <div>
                            <img alt="illustration" src="/images/hero-illustraion.png"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

