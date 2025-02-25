import React, {useState, useEffect} from "react";
import Link from "next/link";

type Item = {
   id: number;
   title: string;
   body: string;
} 

export default function CSRPage() {
 const[data,setData] = useState<Item[]>([]);
 const[loading,setLoading] = useState<boolean>(true);

 useEffect(()=>{
   const fetchData = async ()=>{
     try{
       const response = await fetch('https://dummyjson.com/posts');
       const posts = await response.json();
       setData(posts.posts);
     }
     catch(error){
       console.error(error);
     }
     finally{
       setLoading(false);
     }
   }
   fetchData();
  
 },[])

 return (
   <div
   className={`grid grid-rows-[20px_1fr_20px] px-8 pb-20 gap-16 sm:px-20`}
   >
     <h2 className="text-[28px] font-bold">Client-side fetching</h2>
     {loading? "data loading":
      data && data.map((item:Item)=>{
       return(
         <div key={item.id}>
           <h2 className="text-[18px] font-bold">
            <Link href={`csr/${item.id}`} className="text-blue-900 hover:underline">
                    {item.title}
                  </Link></h2>
           <div>{item.body}</div>
         </div>
         
       )
      })
     
     }
   
   </div>
 );
}
