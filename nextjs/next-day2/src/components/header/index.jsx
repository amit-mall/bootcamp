import React from "react";
import Link from 'next/link';

const Header = ()=>{
    const menu = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "Products list",
            url: "/products-list"
        },
        {
            name: "About",
            url: "/about"
        },
        {
            name: "Contact Us",
            url: "/contact-us"
        }
    ]
    return(
        <header className="mb-10 bg-[#6842ff]">
            <nav>
                <ul className="flex py-2">
                    {menu && menu.map((item,i)=>{
                        return(
                            <li className="mr-10" key={(item.name).toLocaleLowerCase()}>
                                <Link className="text-[20px] p-2 text-[#fff] hover:text-[#222]" href={item.url}>
                                    {item.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}
export default Header