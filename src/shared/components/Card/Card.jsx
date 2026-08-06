import "./Card.css";

export default function Card({

children,

title,

subtitle,

headerAction,

footer,

hover=true,

padding="md",

className="",

}){

return(

<div

className={`
card
card-padding-${padding}
${hover ? "card-hover" : ""}
${className}
`}

>

{(title || subtitle || headerAction) && (

<div className="card-header">

<div className="card-header-left">

{title && (

<h3 className="card-title">

{title}

</h3>

)}

{subtitle && (

<p className="card-subtitle">

{subtitle}

</p>

)}

</div>

{headerAction && (

<div className="card-header-right">

{headerAction}

</div>

)}

</div>

)}

<div className="card-body">

{children}

</div>

{footer && (

<div className="card-footer">

{footer}

</div>

)}

</div>

);

}
