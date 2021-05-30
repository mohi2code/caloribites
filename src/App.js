import { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom'
import { Navbar, Form, Button, Row, Col, InputGroup, ListGroup } from 'react-bootstrap'

import './App.scss'

export default function App() {

    const history = useHistory()

    const [weight, setWeight] = useState(0)
    const [bf, setBf] = useState(0)
    const [activityLevel, setActivityLevel] = useState(0)
    const [goal, setGoal] = useState('lose')

    const [protein, setProtein] = useState(0)
    const [fats, setFats] = useState(0)
    const [carbs, setCarbs] = useState(0)
    const [total, setTotal] = useState(0)

    function calculate(e) {
        e.preventDefault()
        
        let leanMass = weight - (weight*bf/100)
        let maintenanceCalories = leanMass * activityLevel

        let proteinG = leanMass * goalToProtein()
        let proteinC = proteinG * 4
        let fatsG = leanMass * goalToFats()
        let fatsC = fatsG * 9

        let goalCalories = maintenanceCalories + goalToCalories()
        let carbsC = goalCalories - (proteinC + fatsC)
        let carbsG = carbsC / 4
        let totalCalories = proteinC + fatsC + carbsC

        console.log(`Protein: ${proteinG}G`)
        console.log(`Fats: ${fatsG}G`)
        console.log(`Carbs: ${carbsG}G`)
        console.log(`Total calories: ${totalCalories}kcal`)

        setProtein(proteinG)
        setFats(fatsG)
        setCarbs(carbsG)
        setTotal(totalCalories)
        history.push('/summary')
    }

    function clear(e){
        setWeight(0)
        setBf(0)
        setActivityLevel(14)
        setGoal('maintain')
        setProtein(0)
        setFats(0)
        setCarbs(0)
        setTotal(0)

        history.push('/')
    }

    function goalToProtein(){
        if (goal == 'lose')
            return 1.1
        else if (goal == 'maintain')
            return 1.25
        else if (goal == 'gain')
            return 1.4
        else 
            return 1.25
    }

    function goalToFats(){
        if (goal == 'lose')
            return 0.3
        else if (goal == 'maintain')
            return 0.4
        else if (goal == 'gain')
            return 0.5
        else 
            return 0.4
    }

    function goalToCalories() {
        if (goal == 'lose')
            return -500
        else if (goal == 'maintain')
            return 0
        else if (goal == 'gain')
            return 500
        else 
            return 0
    }

    return (
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home" className="d-flex justify-content-center align-items-center">
                    <img
                        alt=""
                        src="/images/favicon.svg"
                        width="45"
                        height="45"
                        className="d-inline-block align-top"
                    />{' '}
                    <span className="ml-2">Caloribites</span>
                </Navbar.Brand>
            </Navbar>

            <Row id="main" className="p-0 m-0">
                <Col lg={5} className="p-0 m-0" id="left">
                    <img
                        alt="logo"
                        src="/images/logo.png"
                        width="350"
                        height="350"
                        className="d-inline-block align-top"
                    />
                </Col>
                <Col lg={7} xs={12} className="p-0 m-0 bg-secondary" id="right">
                    <Switch>
                        <Route path="/summary">
                            <div className="w-100 h-75 p-5">
                                <h5>Your result</h5>
                                <div className="w-100 h-75 d-flex">
                                    <Row className="m-0 p-0 w-100">
                                        <Col md={6} sm={12}>
                                            <h3><strong>{total.toFixed(0)}kcal</strong></h3>
                                        </Col>
                                        <Col md={6} sm={12}>
                                            <ListGroup className="w-100">
                                                <ListGroup.Item className="d-flex">
                                                    <h5>Protein</h5>
                                                    <h5 className="ml-auto">{protein.toFixed(1)}g</h5>
                                                </ListGroup.Item>
                                                <ListGroup.Item className="d-flex">
                                                    <h5>Fats</h5>
                                                    <h5 className="ml-auto">{fats.toFixed(1)}g</h5>
                                                </ListGroup.Item>
                                                <ListGroup.Item className="d-flex">
                                                    <h5>Carbs</h5>
                                                    <h5 className="ml-auto">{carbs.toFixed(1)}g</h5>
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </Col>
                                    </Row>
                                </div>

                                <Button onClick={clear} variant="primary">Clear</Button>
                            </div>
                        </Route>
                        <Route path="/">
                            <Form className="w-100 h-100 p-5" onSubmit={calculate}>
                                <Form.Group controlId="weight">
                                    <Form.Label><strong>Weight</strong></Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                        <InputGroup.Text>lbs</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control type="number" value={weight} onChange={e => setWeight(e.target.value)} />
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group controlId="bf">
                                    <Form.Label><strong>Bodyfat percentage</strong></Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                        <InputGroup.Text>%</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control type="number" value={bf} onChange={e => setBf(e.target.value)} /> 
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group controlId="activityLevel">
                                    <Form.Label><strong>Activity level</strong></Form.Label>
                                    <Form.Control as="select" value={activityLevel} onChange={e => setActivityLevel(e.target.value)} custom>
                                        <option value={13}>13 - Sitting all day</option>
                                        <option value={14}>14 - Slight activity</option>
                                        <option value={15}>15 - Moderate activity during the day</option>
                                        <option value={16}>16 - Active</option>
                                        <option value={17}>17 - Highly active spend all day moving and standing</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="activityLevel">
                                    <Form.Label><strong>Goal</strong></Form.Label>
                                    <Form.Control as="select" value={goal} onChange={e => setGoal(e.target.value)} custom>
                                        <option value="lose">Lose weight</option>
                                        <option value="maintain">Maintain Weight</option>
                                        <option value="gain">Gain weight</option>
                                    </Form.Control>
                                </Form.Group>
                                <div className="w-100 d-flex">
                                    <Button onClick={calculate} variant="primary" type="submit" className="ml-auto">
                                        Calculate
                                    </Button>
                                </div>
                            </Form>
                        </Route>
                    </Switch>
                </Col>
            </Row>

            <footer className="p-4 bg-dark text-white">
                <strong>
                    <small>
                        &copy;2021 Caloribites    developed by <a href="https://github.com/mohi2code">mohi2code</a>
                    </small>
                </strong>
            </footer>
            
        </div>
    );
}
