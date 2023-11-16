import { useLoaderData } from "react-router-dom";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
day.extend(advancedFormat);

const OrdersList = () => {
  const { orders, meta } = useLoaderData();

  return (
    <div className="mt-8">
      <h4 className="mb-4 capitalize">total orders: {meta.pagination.total}</h4>
      <div>
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Products</th>
              <th>Cost</th>
              <th className="hidden sm:block">Date</th>
            </tr>
          </thead>
          {/* body */}
          <tbody>
            {orders.map((order) => {
              const id = order.id;
              const { address, createdAt, name, orderTotal, numItemsInCart } =
                order.attributes;
              const date = day(createdAt).format("hh:mm a - MMM Do, YYYY");
              return (
                <tr key={id}>
                  <th>{name}</th>
                  <th>{address}</th>
                  <th>{numItemsInCart}</th>
                  <th>{orderTotal}</th>
                  <th className="hidden sm:block">{date}</th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default OrdersList;
