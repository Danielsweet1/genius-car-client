import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthProvider";
import OrdersRow from "./OrdersRow/OrdersRow";

const Orders = () => {
  const { user, logOut } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`https://genius-car-server-flame.vercel.app/orders?email=${user.email}`,{
      headers: {
        authorization: `Bearer ${localStorage.getItem('genius-token')}`
      }
    })
      .then((res) => {
        if(res.status === 401 || res.status === 403){
          return logOut()
        }
        return res.json()
      })
      .then((data) => setOrders(data));
  }, [user?.email, logOut]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to delete");
    if (proceed) {
      fetch(`https://genius-car-server-flame.vercel.app/orders/${id}`, {
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
    fetch(`https://genius-car-server-flame.vercel.app/orders/${id}`,{
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
