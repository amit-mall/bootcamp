"use client"
import React,{ useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

interface Post {
    id: number;
    title: string;
    body: string;
}

const ProductDetail: React.FC =()=>{
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect( ()=>{
        const fetchData = async()=>{
            try{
                if (id) {
                    const response = await fetch(`https://dummyjson.com/posts/${id}`);
                    const data: Post = await response.json();
                    setPost(data);
                }
            }
            catch(error){
                console.error(error);
            }
            finally{
                setLoading(false)
            }
        }
        fetchData();
    },[id])
    return(
        <div className="px-20">
        {loading?"loading":
            <>
               <h2 className="font-bold text-xl">{post?.title}</h2>
               {post?.body}
               <p>
               <Link href={'/csr'} className="text-blue-600 hover:underline">
               Go back
               </Link>
               </p>
              
            </>
        }
        </div>
    )
}

export default ProductDetail;