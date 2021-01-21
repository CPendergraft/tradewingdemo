import { useState, useEffect, useCallback } from 'react';

const useForm = (callback, validate) => {
    let today = new Date().getFullYear();
    const [values, setValues] = useState({yearstart:today, yearend:today, today:today});
    const [errors, setErrors] = useState({});
    const [selectedValue, setSelectedValue] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const updateDD = useCallback(
        () => {
            setSelectedValue(0 );
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
        },
        [errors, setSelectedValue],
    );
    useEffect(() => {
        if (errors.valid === true ) {
            updateDD();
        }


    }, [errors, updateDD, isSubmitting]);

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        setIsSubmitting(true);
        setErrors(validate(values));
        updateDD();


    };
    const handleInput = (event) =>{

        setIsSubmitting(false);
        event.persist();
        setErrors(validate(values));

        updateDD();





    };
    const handleSelect = (event) => {

        let val = event.target.value;



        if(val==='1'){

            setValues({yearstart:today, yearend:today, today:today});
        }else if(val==='2'){

            setValues({yearstart:(today-1), yearend:(today-1), today:today});
        }else if(val==='3'){

            setValues({yearstart:(today-1), yearend:(today), today:today});
        }else if(val==='10'){

            setValues({yearstart:(today-10), yearend:(today), today:today});
        }
        setSelectedValue(val);





    };
    const handleChange = (event) => {


        event.persist();
        let name = event.nativeEvent.target.name;
        let val = event.nativeEvent.target.value
        let up = '';
        //remove any alpha character before it displays,
        // since you can't restrict on input, you hack the val before it is displayed
        up = val.toLowerCase().replace(/\D/g, '');


        setValues(values => ({ ...values, [name]:up}));


        updateDD();


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