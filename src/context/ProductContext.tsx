'use client';
import { Product } from '@/type/Product';

import { createContext, useContext } from 'react';

const ProductContext = createContext<Product[]>([]);

export function ProductContextProvider({ value, children }: { value: Product[], children: React.ReactNode }) {
  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
}

export function useProducts() {
  return useContext(ProductContext);
}
