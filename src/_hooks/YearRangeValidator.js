export default function validate(values) {
    let errors = {};
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

        if(yearstart === yearend && yearstart === values.today && yearend === values.today ){
            errors.thisyear = true;
        }
        if(yearstart === values.today-1 && yearend === values.today-1 ){
            errors.lastyear = true;
        }
        if(yearstart === values.today-1 && yearend === values.today ){
            errors.twoyears = true;
        }
        if(yearend === values.today &&  yearstart === values.today-1 ){
            errors.twoyears = true;
        }

        if(yearend === values.today &&  yearstart === values.today-10 ){
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

        errors.yearend = 'Start year can not be greater than the end year';
        errors.disabled = true;
        if(values.yearend === values.yearstart){

            console.log('validate 2', parseInt(values.yearstart), parseInt(values.yearend));
            errors.yearend = 'Valid year range (1  year)';
            errors.disabled = false;
            checkyear();

        }

    }else {

        errors.yearend = 'Valid year range ('+(parseInt(values.yearend) - parseInt(values.yearstart))+" years)";
        errors.disabled = false;
        checkyear();
    }
    return errors;
};
