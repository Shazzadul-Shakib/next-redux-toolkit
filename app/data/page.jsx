'use client'
import { useGetAllProductsQuery, useGetIphoneQuery } from "@/redux/Services/api";
import { iphoneFilter } from "@/redux/filter/filterSlice";
import { useDispatch, useSelector } from "react-redux";



export default function Data() {
  const filterParam = useSelector(state => state.filter.value);
  const dispatch = useDispatch();
   
  // const { data,isLoading } = useGetAllProductsQuery();
  const { data,isLoading } = useGetIphoneQuery(filterParam);
  if (isLoading) {
    return <h1>Loading.....</h1>
  }
  const handleSearch = (param) => {
   dispatch(iphoneFilter(param));
 }
    
  

  return (
    <main>
      <h1>Data: {data.products.length}</h1>
      <button className=" p-2 bg-gray-500 text-white" onClick={()=>handleSearch('iphone')}>Search Iphone</button>
      <button className=" p-2 bg-gray-500 text-white ml-4" onClick={()=>handleSearch('key holder')}>Search keyholder</button>
      {
        data.products.map(product => 
          <div className="bg-gray-500 p-3 my-2">
            <h1>{product.id}:{product.title}</h1>
          </div>
        )
      }
      
    </main>
  );
}