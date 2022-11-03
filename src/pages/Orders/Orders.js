import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthProvider";
import OrdersRow from "./OrdersRow/OrdersRow";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to delete");
    if (proceed) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = orders.filter((or) => or._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  const handleUpdate = id =>{
    fetch(`http://localhost:5000/orders/${id}`,{
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({status: 'Approved'})
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.modifiedCount > 0){
        const remaining = orders.filter(or=> or._id !== id)
        const changed = orders.find(or=> or._id === id)
        changed.status = 'Approved'
        const newOrder = [changed, ...remaining]
        setOrders(newOrder)
      }
    })
  }
  return (
    <div className="my-12">
      <div className="overflow-x-auto w-full border rounded">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Service</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {user?.email &&
              orders?.map((order) => (
                <OrdersRow
                  key={order._id}
                  order={order}
                  handleDelete={handleDelete}
                  handleUpdate={handleUpdate}
                ></OrdersRow>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
