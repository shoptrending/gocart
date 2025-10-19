export const runtime = 'edge';

import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import { dummyStoreData, productDummyData } from "@/assets/assets";

export default async function StoreShop({ params }) {
  const username = params.username;

  // Fetch data server-side
  const storeInfo = dummyStoreData;
  const products = productDummyData;

  return (
    <div className="min-h-[70vh] mx-6">
      <div className="max-w-7xl mx-auto bg-slate-50 rounded-xl p-6 md:p-10 mt-6 flex flex-col md:flex-row items-center gap-6 shadow-xs">
        <Image
          src={storeInfo.logo}
          alt={storeInfo.name}
          width={200}
          height={200}
          className="size-32 sm:size-38 object-cover border-2 border-slate-100 rounded-md"
        />
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-semibold text-slate-800">{storeInfo.name}</h1>
          <p className="text-sm text-slate-600 mt-2 max-w-lg">{storeInfo.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mb-40">
        <h1 className="text-2xl mt-12">Shop <span className="text-slate-800 font-medium">Products</span></h1>
        <div className="mt-5 grid grid-cols-2 sm:flex flex-wrap gap-6 xl:gap-12 mx-auto">
          {products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
    </div>
  );
}
