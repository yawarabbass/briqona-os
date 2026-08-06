import "./Table.css";

export default function Table({

columns=[],

data=[],

emptyText="No Data Found",

}){

return(

<div className="table-wrapper">

<table className="table">

<thead>

<tr>

{columns.map((column,index)=>(

<th key={index}>

{column.header}

</th>

))}

</tr>

</thead>

<tbody>

{data.length>0 ? (

data.map((row,rowIndex)=>(

<tr key={rowIndex}>

{columns.map((column,colIndex)=>(

<td key={colIndex}>

{row[column.accessor]}

</td>

))}

</tr>

))

):(

<tr>

<td

colSpan={columns.length}

className="table-empty"

>

{emptyText}

</td>

</tr>

)}

</tbody>

</table>

</div>

);

}
