import "./Table.css";

export default function Table({
  columns = [],
  data = [],
}) {
  return (
    <div className="table-wrapper">

      <table className="table">

        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>
                {column.title}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>

          {data.map((row, index) => (

            <tr key={index}>

              {columns.map((column) => (

                <td key={column.key}>
                  {row[column.key]}
                </td>

              ))}

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
                            }
