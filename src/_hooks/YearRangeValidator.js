export default function validate(values) {
    let errors = {};
    errors.valid = false;
    errors.disabled= true;
    errors.tenyears = false;
    errors.twoyears = false;
    errors.lastyear = false;
    errors.thisyear = true;

    function checkyear(){
        let yearstart = parseInt(values.yearstart);
        let  yearend =  parseInt(values.yearend);
        if(values.today===undefined){
            values.today = new Date().getFullYear();
        }
        console.log(yearstart, yearend, values.today)
        // this year
        if(yearstart === yearend && yearstart === values.today && yearend === values.today ){
            errors.thisyear = true;
            errors.lastyear = false;
            errors.twoyears = false;
            errors.tenyears = false;
        }
        // last year
        if(yearstart === values.today-1 && yearend === values.today-1 ){
            errors.thisyear = false;
            errors.lastyear = true;
            errors.twoyears = false;
            errors.tenyears = false;
        }
        //last two years
        if(yearend === values.today &&  yearstart === values.today-1 ){
            errors.thisyear = false;
            errors.lastyear = false;
            errors.twoyears = true;
            errors.tenyears = false;
        }
        //last ten years
        if(yearend === values.today &&  yearstart === values.today-10 ){
            errors.lastyear = false;
            errors.lastyear = false;
            errors.twoyears = false;
            errors.tenyears = true;
        }
    }

    if (!values.yearstart) {

        errors.yearstart = 'Must have a start year';

    }if(!values.yearend){
        errors.yearend = 'Must have a end year';
    }

    if (parseInt(values.yearend) <= parseInt(values.yearstart)) {

        console.log('validate',parseInt(values.yearstart), parseInt(values.yearend));


        errors.disabled = true;
        if(values.yearend === values.yearstart){

            console.log('validate 2', parseInt(values.yearstart), parseInt(values.yearend));
            errors.yearend = 'Valid year range (1  year)';
            errors.disabled = false;
            checkyear();
            errors.valid = true;

        }else{
            errors.yearstart = 'Start date must proceed end date';
        }

    }else {

         errors.disabled = false;
        errors.valid = true;
        checkyear();
    }
    return errors;
};
