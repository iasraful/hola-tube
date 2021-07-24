import Image from "next/dist/client/image";
import {BadgeCheckIcon,

    CollectionIcon,
    HomeIcon,
LightningBoltIcon,
SearchIcon,
UserIcon}from "@heroicons/react/outline"
import logo from '../../../public/pngfind.com-hola-png-5873084.png'
import HeaderItems from "./HeaderItems";
export default function Header() {
    return (
        <header className="flex flex-col sm:flex-row justify-between m-5 items-center">
            <div className="flex flex-grow justify-evenly max-w-2xl">
            <HeaderItems title="HOME" Icon={HomeIcon}/>
            <HeaderItems title="Trending" Icon={LightningBoltIcon}/>
            <HeaderItems title="Verefied" Icon={BadgeCheckIcon}/>
            <HeaderItems title="Collections" Icon={CollectionIcon}/>
            <HeaderItems title="Search" Icon={SearchIcon}/>
            <HeaderItems title="Account" Icon={UserIcon}/>
            </div>
            
            <Image
            className="object-contain"
            alt="nav image"
            src={logo}
            width={200}
            height={100}/>
        </header>
    )
}
