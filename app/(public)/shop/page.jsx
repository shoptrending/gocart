export const runtime = 'edge';

import ProductCard from "@/components/ProductCard";

async function getProducts() {
  // Replace with your actual API or data source
  return [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" }
  ];
}

export default async function Shop({ params, searchParams }) {
  const products = await getProducts();
  const search = searchParams?.search;
  const filteredProducts = search
    ? products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    : products;

  return (
    <div className="min-h-[70vh] mx-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl text-slate-500 my-6 flex items-center gap-2">
          All <span className="text-slate-700 font-medium">Products</span>
        </h1>
        <div className="grid grid-cols-2 sm:flex flex-wrap gap-6 xl:gap-12 mx-auto mb-32">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
