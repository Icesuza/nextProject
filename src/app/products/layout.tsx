import { ProductContextProvider } from "../../context/ProductContext";

export default async function ProductsLayout({ children }: { children: React.ReactNode }) {
  const res = await fetch('https://dummyjson.com/products', { cache: 'force-cache' });
  const data = await res.json();

  return (
    <ProductContextProvider value={data.products}>
      {children}
    </ProductContextProvider>
  );
}
