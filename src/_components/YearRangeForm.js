import React from 'react';
import useForm from "../_hooks/useForm";
import validate from '../_hooks/YearRangeValidator';

const YearRangeForm = () => {
    const {

        values,
        errors,
        handleChange,
        handleInput,
        handleSubmit,
        handleSelect,
        selectedValue,
    } = useForm(login, validate);

    function login() {

        console.log('No errors, submit callback called!');
    }

    return (

        <div className="container" >
        <div className="formhold" >

            <form    onSubmit={handleSubmit} noValidate>
                <div className="row" >
                    <div className="form-group col-12">
                    <label className="label">Date Range</label>
                    <select className='form-control col-8' value={selectedValue} onChange={ handleSelect }>
                        <option   key={0} value={0}>
                            -free form year range-
                        </option>
                        <option  key={1} value={1}>
                            This Year
                        </option>
                        <option key={2} value={2}>
                            Last Year
                        </option>
                        <option key={3} value={3}>
                            Last 2 years
                        </option>
                        <option key={4} value={10}>
                            Last 10 years
                        </option>
                     </select>
                </div>
                </div>

                <div className="row">
                   <div className="col-4">
                    <div  className="form-group">
                        <label className="label">Start Year</label>
                        <div className="control">
                            <input autoComplete="off"  pattern="[0-9]*" className='form-control' type="text"  maxLength={4}  name="yearstart" onChange={handleChange} onKeyUp={handleInput} value={values.yearstart || ''} required />
                            {errors.yearstart && (
                                <p className="help is-danger">{errors.yearstart}</p>
                            )}
                        </div>
                    </div>
                   </div>
                    <div className="col-4" >
                    <div className="form-group">
                        <label className="label">End Year</label>
                        <div className="control">
                            <input type="text"  maxLength={4}  pattern="[0-9]*" className='form-control'  name="yearend" onChange={handleChange}  onKeyUp={handleInput}  value={values.yearend || ''} required />
                        </div>

                    </div>
                        <div className="col-4">

                        </div>
                    </div>

               </div>
                <div className="row">
                    <div className="col-12 button_col">
                        <button  disabled={errors.disabled} className="btn btn-success btn-right">Apply</button>
                    </div>

                </div>
            </form>

        </div>
        </div>
    );
};

export default YearRangeForm;