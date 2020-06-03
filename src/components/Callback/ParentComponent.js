import React, { useState, useCallback } from 'react'
import Count from './Count'
import Button from './Button'
import Title from './Title'

function ParentComponent() {
    const [age, setAge] = useState(18)
    const [salary, setSalary] = useState(50000)

    const incremnetAge = useCallback(() => {
        setAge(age + 1)
    }, [age])
    const incremnetSalray = useCallback(() => {
        setSalary(salary + 10000)
    }, [salary])


    return (
        <div>
            <Title />
            <Count text="age" count={age} />
            <Button handleButton={incremnetAge}>Increment age</Button>
            <Count text="salary" count={salary} />
            <Button handleButton={incremnetSalray}>Increment salary</Button>
        </div>
    )
}

export default ParentComponent
