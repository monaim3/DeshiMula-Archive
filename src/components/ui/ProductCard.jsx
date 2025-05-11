import React from 'react';
import { Link } from 'react-router-dom';
const ProductCard = ({ data }) => {
  return (
    <>
    <Link to={`/product/${data.product_id}`}>
    <div className="bg-white shadow rounded-md p-4 border">
      <img
        src={data.product_image}
        alt={data.product_title}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold">{data.product_title}</h3>
      <p className="text-sm text-gray-600">{data.description}</p>
      <p className="mt-2 font-bold text-purple-600">${data.price}</p>
    </div>

    </Link>
    </>
  );
};

export default ProductCard;