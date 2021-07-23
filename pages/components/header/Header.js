import Image from "next/dist/client/image";
import {HomeIcon}from "@heroicons/react/outline"
import logo from '../../../public/pngfind.com-hola-png-5873084.png'
import HeaderItems from "./HeaderItems";
export default function Header() {
    return (
        <header className="">
            <HeaderItems title="HOME" Icon={HomeIcon}/>
            <Image
            className="object-contain"
            alt="nav image"
            src={logo}
            width={200}
            height={100}/>
        </header>
    )
}
