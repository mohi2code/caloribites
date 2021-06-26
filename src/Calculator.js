export default function Calculator({
    weight=0,
    bodyfat=0,
    activityLevel=13,
    goal=1
}){

    weight = weight * 2.205
    const leanMass = weight - (weight*bodyfat/100)
    const maintenanceCalories = leanMass * activityLevel

    const proteinG = leanMass * proteinScale()
    const proteinC = proteinG * 4
    const fatsG = leanMass * fatsScale()
    const fatsC = fatsG * 9

    const goalCalories = maintenanceCalories + goalToCalories()
    const carbsC = goalCalories - (proteinC + fatsC)
    const carbsG = carbsC / 4
    const totalCalories = proteinC + fatsC + carbsC

    return Object.freeze({
        getProteinGrams: () => proteinG.toFixed(2),
        getFatsGrams: () => fatsG.toFixed(2),
        getCarbsGrams: () => carbsG.toFixed(2),
        getTotalCalories: () => totalCalories.toFixed(0)
    })

    function proteinScale(){
        if (goal === 0)
            return 1.1
        else if (goal === 1)
            return 1.25
        else if (goal === 2)
            return 1.4
        else 
            return 1.25
    }

    function fatsScale(){
        if (goal === 0)
            return 0.3
        else if (goal === 1)
            return 0.4
        else if (goal === 2)
            return 0.5
        else 
            return 0.4
    }

    function goalToCalories() {
        if (goal === 0)
            return -500
        else if (goal === 1)
            return 0
        else if (goal === 2)
            return 500
        else 
            return 0
    }
}