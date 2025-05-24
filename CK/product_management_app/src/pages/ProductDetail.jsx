import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://67ec9394aa794fb3222e224b.mockapi.io/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Đang tải chi tiết...</p>;
  if (!product) return <p>Không tìm thấy sản phẩm.</p>;

  return (
    <div className="p-4">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-white bg-gray-500 px-3 py-1 rounded hover:bg-gray-600"
      >
        ← Quay lại
      </button>
      <div className="border p-4 rounded shadow">
        {product.image && (
          <img src={product.image} alt={product.name} className="w-full h-60 object-cover mb-4" />
        )}
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p className="text-gray-700 my-2">{product.description}</p>
        <p className="text-blue-600 font-semibold">{product.price}₫</p>
      </div>
    </div>
  );
};

export default ProductDetail;
