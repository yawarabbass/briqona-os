import "./PlanTable.css";
import plans from "../../data/plans";

export default function PlanTable() {
  return (
    <section className="plan-table">

      <div className="plan-table-header">
        <h2>Plans</h2>
      </div>

      <table>

        <thead>
          <tr>
            <th>Plan</th>
            <th>Price</th>
            <th>Billing</th>
            <th>Companies</th>
            <th>Users</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {plans.map((plan) => (

            <tr key={plan.id}>

              <td>{plan.name}</td>

              <td>{plan.price}</td>

              <td>{plan.billing}</td>

              <td>{plan.companies}</td>

              <td>{plan.users}</td>

              <td>{plan.status}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </section>
  );
}
