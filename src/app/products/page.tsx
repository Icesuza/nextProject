'use client';

import { useProducts } from '@/context/ProductContext';

export default function ProductPage() {
  const products = useProducts();

  return (
    <div>
      <h1>Products</h1>
      {products.map(p => <p key={p.id}>{p.title}</p>)}
    </div>
  );
}
