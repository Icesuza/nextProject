'use client';
import { Product } from '@/type/Product';
import { useProducts } from '../hooks/useProducts';

export default function ProductsSWR() {
  const { data, error, isLoading } = useProducts();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div>
      <h1>Products (SWR)</h1>
      {data.products.map((p: Product) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  );
}
