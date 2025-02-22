import React, {useState, useEffect} from "react";

type Products = {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
}
const Products = ()=>{
    const [product, setProduct] = useState<Products[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(()=>{
        const fetchProducts = async()=>{
            const response = await fetch('https://dummyjson.com/products ');
            const {products} = await response.json()
            setProduct(products.slice(0,10));
            setLoading(false);
        };
        fetchProducts()
    },[])

    return(
        <div className="px-10">
        <h2 className="text-center text-[22px] font-bold">Products</h2>
        {
            loading?"loading products....":
            <table>
                <thead>
                    <tr>
                        <th className="py-3 px-6">ID</th>
                        <th className="py-3 px-6">Title</th>
                        <th className="py-3 px-6">Description</th>
                        <th className="py-3 px-6">Category</th>
                        <th className="py-3 px-6">Price</th>
                    </tr>
                </thead>
                {
                    product && product.map((product)=>{
                        const {id,title,description,category,price} = product;
                        return(
                            <tr key={id} className="border-b hover:bg-gray-100">
                                <td className="py-3 px-6">{id}</td>
                                <td className="py-3 px-6">{title}</td>
                                <td className="py-3 px-6">{description}</td>
                                <td className="py-3 px-6">{category}</td>
                                <td className="py-3 px-6">{price}</td>
                            </tr>
                        )
                    })
                }
            </table>
        }
        </div>
    )
}
export default Products;
