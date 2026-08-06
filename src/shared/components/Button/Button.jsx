import "./Button.css";

export default function Button({

children,

type="button",

variant="primary",

size="md",

fullWidth=false,

disabled=false,

icon=null,

onClick,

}){

return(

<button

type={type}

disabled={disabled}

onClick={onClick}

className={`
btn
btn-${variant}
btn-${size}
${fullWidth ? "btn-block" : ""}
`}

>

{icon &&

<span className="btn-icon">

{icon}

</span>

}

<span>

{children}

</span>

</button>

);

}
