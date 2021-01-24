import React, {useState} from 'react';


const YearRangeForm = (props) => {



    const [selectionHandler] = useState(props.selectionHandler);


    const {

        values,
        errors,
        handleChange,
        handleInput,
        handleSubmit,
        handleSelect,
        selectedValue,
    } = props.useForm(selectionHandler, props.validate);



    return (

        <div className="container" >
        <div className="formhold" >

            <form    onSubmit={handleSubmit} noValidate>
                <div className="row" >
                    <div className="form-group col-12">
                    <label className="label">Date Range</label>
                    <select className='form-control col-8' value={selectedValue} onChange={ handleSelect }>
                        {props.options.map(item => (
                            <option
                                key={item.key}
                                value={item.value}
                            >
                                {item.label}
                            </option>
                        ))}
                     </select>
                </div>
                </div>

                <div className="row">
                   <div className="col-4">
                    <div  className="form-group">
                        <label className="label">Start Year</label>
                        <div className="control">
                            <input type="text" autoComplete="off"  pattern="[0-9]*" className='form-control'   maxLength={4}  name="yearstart" onChange={handleChange} onKeyUp={handleInput}   value={values.yearstart } required />
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
                            <input type="text"  maxLength={4}  pattern="[0-9]*" className='form-control'  name="yearend" onChange={handleChange}  onKeyUp={handleInput}   value={values.yearend } required />
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