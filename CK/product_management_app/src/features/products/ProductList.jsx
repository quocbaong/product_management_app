import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard';

const ProductList = () => {
  const { products, loading, error } = useSelector((state) => state.products);

  if (loading) return <p>Đang tải...</p>;
  if (error) return <p>Lỗi: {error}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
