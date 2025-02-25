"use client"
import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import Link from "next/link";


type Item = {
   id: number;
   title: string;
   body: string;
} 

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th, td {
    padding: 10px;
    border: 1px solid #000;
    text-align: left;
  }

  th {
    background-color: #000;
    color: white;
  }

  tr:hover {
    background-color: #f1f1f1;
  }
`;

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
   className={`px-8 pb-20 gap-16 sm:px-20`}
   >
     <h2 className="text-[28px] font-bold">Client-side fetching</h2>
     {loading? "data loading":
     <StyledTable>
        <thead>

        <tr>
            <th>Title</th>
            <th>Body</th>
        </tr>
        </thead>
        <tbody>
        {data && data.map((item:Item)=>{
            return(
                <tr key={item.id}>
                <td><h2 className="text-[18px] font-bold">
                  <Link href={`post-csr/${item.id}`} className="text-blue-900 hover:underline">
                    {item.title}
                  </Link>
                  
                  </h2></td>
                <td>{item.body}</td>
                </tr>
                
            )
        })}
        </tbody>
     </StyledTable>
      
     
     }
   
   </div>
 );
}
