import './App.css';
import './_components/YearRangeForm'
import React from 'react';
import YearRangeForm from "./_components/YearRangeForm";
import YearRangeComponent from "./_components/YearRangeComponent";
import useYearRangeFormBasic from "./_hooks/useYearRangeFormBasic";
import useYearRangeFormFiveYear from "./_hooks/useYearRangeFormFiveYear";
import validate from "./_hooks/YearRangeValidatorBasic";
import validatefiveyears from "./_hooks/YearRangeValidatorFiveYear";
import * as Options  from './_hooks/YearRangeOptions'

function App() {
    console.log('YearRangeOptions', Options.Basic);
    function selectionHandler(values){
        console.log('submit form', values.yearstart);
        alert('Start Year: '+ values.yearstart+' End Year: '+ values.yearend);
    }


    return (
    <div className="container">
      <h2>Original Idea</h2>
      <p>Logic and validation baked inside, functional, but not extendable  <br/>
      or reusable except for within the narrow parameters of original design.</p>
        <YearRangeForm />
        <br/>
        <hr/>
        <h2>Updated Idea</h2>
        <p>Logic, validation and select options are passed in from top level<br/> through props to the component.</p>
        <img  alt="img 1" src='img/screen_comp2.png' width='800px' />
        <YearRangeComponent
            selectionHandler={ (event)=> selectionHandler }
            options={Options.Basic}
            validate={validate}
            useForm={useYearRangeFormBasic}  />

        <br/>
        <h2>Updated Context</h2>
        <p>Same component as above, but now decorated with a new validator, <br/>
            option set (added 5 years), and logic.
            <br/>
            Also, added a warning if you advance into the future where there <br/>
            is no data, that is added in the new validator.
        <br/>
            The click handler is assigned as a prop, so the that parent component <br/>can tie in to the output of the two fields.
        <br/>
        </p>
        <img  alt="img 2"  src='img/screen_comp.png' width='800px' />
        <YearRangeComponent
            selectionHandler={ (event)=> selectionHandler }
            options={Options.Five_year}
            validate={validatefiveyears}
            useForm={useYearRangeFormFiveYear}  />
        <br/>
            <div className='pullquote'>
                <i> This Alert on the apply is App layer, just to demonstrate. </i>
            </div>



        <br/> <br/>
    </div>
  );
}

export default App;
