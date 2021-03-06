export default function validatefiveyears(values) {
    let errors = {};
    errors.valid = false;
    errors.disabled= true;
    errors.tenyears = false;
    errors.fiveyears = false;
    errors.twoyears = false;
    errors.lastyear = false;
    errors.thisyear = false;
    errors.freerange = false;

    function checkyear(){
        let yearstart = parseInt(values.yearstart);
        let  yearend =  parseInt(values.yearend);
        if(values.today===undefined){
            values.today = new Date().getFullYear();
        }

        // this year
        if(yearstart === yearend && yearstart === values.today && yearend === values.today ){
            errors.thisyear = true;
            errors.lastyear = false;
            errors.twoyears = false;
            errors.tenyears = false;
            errors.fiveyears = false;
        }
        // last year
        if(yearstart === values.today-1 && yearend === values.today-1 ){
            errors.thisyear = false;
            errors.lastyear = true;
            errors.twoyears = false;
            errors.tenyears = false;
            errors.fiveyears = false;
        }
        //last two years
        if(yearend === values.today &&  yearstart === values.today-1 ){
            errors.thisyear = false;
            errors.lastyear = false;
            errors.twoyears = true;
            errors.tenyears = false;
            errors.fiveyears = false;
        }
        //last 5 years
        if(yearend === values.today &&  yearstart === values.today-5 ){
            errors.thisyear = false;
            errors.lastyear = false;
            errors.twoyears = false;
            errors.tenyears = false;
            errors.fiveyears = true;
        }
        //last ten years
        if(yearend === values.today &&  yearstart === values.today-10 ){
            errors.thisyear = false;
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




        errors.disabled = true;
        if(parseInt(values.yearend) === parseInt(values.yearstart)){

            errors.yearend = 'Valid year range (1  year)';
            errors.disabled = false;
            checkyear();
            errors.valid = true;
            errors.yearstart='';

        }else{

            errors.yearstart = 'Start date must proceed end date';
        }

    }else {
        //add a error for  date in the future with no data
        if(parseInt(values.yearend)>values.today){
            errors.yearstart = 'This has no future data';
        }
         errors.disabled = false;
        errors.valid = true;
        checkyear();
    }

    return errors;
};
