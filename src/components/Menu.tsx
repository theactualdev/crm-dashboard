import Link from "next/link";
import Image from "next/image";
import { menuItems } from "./data/MenuItems";

const Menu = () => {
    return(
        <div className="mt-4 text-sm">
            { menuItems.map((item) => (
                <div className="flex flex-col gap-2" key={item.title}>
                    <span className="hidden lg:block text-gray-400 font-light my-4"> { item.title } </span>
                    { item.items.map((subItem) => (
                        <Link href={subItem.href} key={subItem.label} className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2">
                            <Image src={subItem.icon} alt="" height={20} width={20} />
                            <span className="hidden lg:block"> {subItem.label} </span>
                        </Link>
                    ))}
                </div>
            )) }
        </div>
    )
}

export default Menu;