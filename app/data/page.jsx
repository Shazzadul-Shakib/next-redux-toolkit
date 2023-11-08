'use client'
import { useGetAllProductsQuery } from "@/redux/Services/api";
export default function Data() {
  const { data,isLoading } = useGetAllProductsQuery();
  // const allProducts = data.products;
  // console.log(data);
  if (isLoading) {
    return <h1>Loading.....</h1>
  }

  return (
    <main>
      <h1>Data: { data.products.length}</h1>
      {
        data.products.map(product => 
          // console.log(product.title);
          <div className="bg-gray-500 p-3 my-2">
            <h1>{product.id}:{product.title}</h1>
          </div>
        )
      }
      
    </main>
  );
}