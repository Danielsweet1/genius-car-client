import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthProvider";
import OrdersRow from "./OrdersRow/OrdersRow";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/orders/?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email]);
  return (
    <div className="my-12">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                
              </th>
              <th>Name</th>
              <th>Service</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
           {
            orders.map(order => <OrdersRow
            key={order._id}
            order={order}
            ></OrdersRow>)
           }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
