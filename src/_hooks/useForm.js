import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
    let today = new Date().getFullYear();
    const [values, setValues] = useState({yearstart:today, yearend:today, today:today});
    const [errors, setErrors] = useState({});
    const [selectedValue, setSelectedValue] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (errors.valid === true && isSubmitting) {
            callback();
        }


    }, [errors, callback, isSubmitting]);

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        setIsSubmitting(true);
        setErrors(validate(values));
        updateDD();


    };
    const handleInput = (event) =>{
        setIsSubmitting(false);
        event.persist();
        setValues(values => ({ ...values, [event.target.name]: event.target.value }  ));
        setErrors(validate(values));

        updateDD();





    };
    const handleSelect = (event) => {

        let val = event.target.value;
        setSelectedValue(val);


        if(val==='1'){

            setValues({yearstart:today, yearend:today});
        }else if(val==='2'){

            setValues({yearstart:(today-1), yearend:(today-1)});
        }else if(val==='3'){

            setValues({yearstart:(today-1), yearend:(today)});
        }else if(val==='10'){

            setValues({yearstart:(today-10), yearend:(today)});
        }

     setErrors(validate(values))




    };
    const handleChange = (event) => {


        event.persist();
        setValues(values => ({ ...values, [event.target.name]: event.target.value }));

        setSelectedValue(0);
        updateDD();


    };
    const updateDD = function (){
        if(errors.thisyear){

            setSelectedValue(1 );
        }
        if(errors.lastyear){
            setSelectedValue(2);
        }
        if(errors.twoyears){
            setSelectedValue(3);
        }
        if(errors.tenyears){

            setSelectedValue(10);
        }
    }
    return {
        handleInput,
        selectedValue,
        handleChange,
        handleSubmit,
        handleSelect,
        values,
        errors,
    }
};

export default useForm;