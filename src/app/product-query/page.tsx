'use client';

import { Product } from '@/type/Product';
import { useProducts } from '../hooks/useProducts';

export default function ProductsQueryPage() {
  const { data, isLoading, isError } = useProducts();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading products.</p>;

  return (
    <div>
      <h1>Products (React Query)</h1>
      {data.products.map((p: Product) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  );
}
