import { useEffect, useState } from "react";

export default function useForm(initialFields, validate, callback) {

    const [fields, setFields] = useState(initialFields)
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = e => {
        const { name, value } = e.target
        setFields({
            ...fields,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        setErrors(validate(fields))
        setIsSubmitting(true)
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) 
            callback();
    }, [errors])

    return [ fields, handleChange, handleSubmit, errors ]
}