import { useQuery } from '@tanstack/react-query';

const fetchProducts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}products`);
  return res.json();
};

export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    staleTime: 60 * 1000, // 60s
  });
}

