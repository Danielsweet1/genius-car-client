import React, { useEffect, useState } from "react";

const OrdersRow = ({ order, handleDelete, handleUpdate }) => {
  const {_id, name, title, price, service, phone, email, status } = order;
  const [orderService, setOrderService] = useState({});


  useEffect(() => {
    fetch(`https://genius-car-server-flame.vercel.app/services/${service}`)
      .then((res) => res.json())
      .then((data) => setOrderService(data));
  }, [service]);
  return (
    <tr>
      <th>
        <button onClick={()=>handleDelete(_id)} className="btn btn-square btn-outline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded-xl w-24 h-24">
              {orderService?.img && (
                <img
                  src={orderService.img}
                  alt="Avatar Tailwind CSS Component"
                />
              )}
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{phone}</div>
          </div>
        </div>
      </td>
      <td>
        {title}
        <br />
        <span className="badge badge-ghost badge-sm">${price}</span>
      </td>
      <td>{email}</td>
      <th onClick={()=>handleUpdate(_id)}>
        {status ? <button className="btn btn-outline btn-warning">{status}</button> : <button className="btn btn-primary">Pending</button>}
      </th>
    </tr>
  );
};

export default OrdersRow;
