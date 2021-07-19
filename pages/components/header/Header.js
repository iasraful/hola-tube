import Image from "next/dist/client/image";
import logo from '../../../public/pngfind.com-hola-png-5873084.png'
export default function Header() {
    return (
        <header className="">
            <Image
            className="object-contain"
            alt="nav image"
            src={logo}
            width={200}
            height={100}/>
        </header>
    )
}
