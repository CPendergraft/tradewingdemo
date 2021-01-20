import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
    let today = new Date().getFullYear();
    const [values, setValues] = useState({yearstart:today, yearend:today, today:today});
    const [errors, setErrors] = useState({});
    const [selectedValue, setSelectedValue] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors, callback, isSubmitting]);

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        console.log(values);
        setErrors(validate(values));
        setIsSubmitting(true);
    };
    const handleInput = (event) =>{
        event.persist();
        setValues(values => ({ ...values, [event.target.name]: event.target.value }), setErrors(validate(values)));

        if(errors.thisyear){

            setSelectedValue(0);
        }
        if(errors.lastyear){
            setSelectedValue(1);
        }
        if(errors.twoyears){
            setSelectedValue(2);
        }
        if(errors.tenyears){
            setSelectedValue(10);
        }
        if(!errors.tenyears && !errors.twoyears && !errors.lastyear && errors.thisyear){
            setSelectedValue(12);
        }
    };
    const handleSelect = (event) => {

        let val = event.target.value;
        setSelectedValue(val);
        console.log('select-',val);

        if(val==='0'){
            console.log('case1');
            setValues({yearstart:today, yearend:today});
        }else if(val==='1'){
            console.log('case2');
            setValues({yearstart:(today-1), yearend:(today-1)});
        }else if(val==='2'){
            console.log('case3');
            setValues({yearstart:(today-1), yearend:(today)});
        }else if(val==='10'){
            console.log('case4');
            setValues({yearstart:(today-10), yearend:(today)});
        }



        setErrors(validate(values));


    };
    const handleChange = (event) => {

        event.persist();
        setValues(values => ({ ...values, [event.target.name]: event.target.value }));




    };

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