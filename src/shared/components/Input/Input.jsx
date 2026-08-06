import "./Input.css";

export default function Input({

label,

type="text",

placeholder="",

value,

onChange,

required=false,

disabled=false,

error="",

helperText="",

icon=null,

}){

return(

<div className="input-group">

{label && (

<label className="input-label">

{label}

{required &&

<span className="required">*</span>

}

</label>

)}

<div className={`input-wrapper ${error ? "input-error" : ""}`}>

{icon &&

<span className="input-icon">

{icon}

</span>

}

<input

className="input-field"

type={type}

placeholder={placeholder}

value={value}

onChange={onChange}

required={required}

disabled={disabled}

/>

</div>

{error ? (

<p className="input-error-text">

{error}

</p>

) : helperText ? (

<p className="input-helper">

{helperText}

</p>

) : null}

</div>

);

}
