import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded p-4 shadow hover:shadow-md transition">
      {product.image && <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2" />}
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-sm text-gray-600">{product.description}</p>
      <p className="font-bold text-blue-500 mt-1">{product.price}$</p>
      <Link
        to={`/product/${product.id}`}
        className="inline-block mt-2 text-sm text-white bg-blue-600 px-3 py-1 rounded hover:bg-blue-700"
      >
        Chi tiết
      </Link>
    </div>
  );
};

export default ProductCard;
