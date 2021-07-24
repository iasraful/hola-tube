function HeaderItems({Icon, title}) {
    return (
        <div className="flex flex-col items-center cursor-pointer w-12 group sm:w-20 hover:text-white">
            <Icon className="h-8 mb-1 mt-3 group-hover:animate-bounce"/>
            <p className= "tracking-widest opacity-0 group-hover:opacity-100">{title}</p>
        </div>
    )
}

export default HeaderItems
