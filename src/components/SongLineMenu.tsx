import { CirclePlus, Heart, HeartOff, ListStart, ListEnd } from "lucide-react";

function SongLineMenu() {
    const menuList = [
        { icon: Heart, name: "Нравится", fill: true },
        { icon: HeartOff, name: "Не нравится", fill: true },
        { icon: CirclePlus, name: "Добавить в плейлист", fill: true },
        { icon: ListStart, name: "Играть следующим", fill: false},
        { icon: ListEnd, name: "Добавить в очередь", fill: false}
    ]

    return (
        <div className="fixed w-full left-0 bottom-0 z-20">
            <ul className="flex flex-col text-white hover-bg rounded rounded-xl overflow-hidden">
                {menuList.map((element) => {
                    const IconContainer = element.icon;
                    return (<li className="flex cursor-pointer px-10 py-5 justify-between group bg-[var(--color-bg)] hover:bg-[var(--color-bg-light)]">
                        <span className="text-xl font-bold">{element.name}</span>
                        <IconContainer className={`${element.fill ? "group-hover:fill-[var(--color-text)]" : "" } `}/>
                    </li>)
                })}
            </ul>
        </div>
    )
}


export default SongLineMenu;