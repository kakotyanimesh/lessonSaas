interface TestProps{
    image : string,
    name : string,
    desc : string,
    schoolName : string
}

export default function TestCard({image, name, desc, schoolName} : TestProps){
    return (
        <div className="flex ui-flex-col ui-space-y-6 ui-p-10 ui-shadow-xl ui-rounded-2xl">
            <div className="flex ui-flex-row ui-items-center ui-gap-4">
                <img src={image} alt={name} className="ui-size-20 ui-rounded-full"/>
                <div className="">
                    <h1 className="ui-font-semibold ui-text-xl">{name}</h1>
                    <p className="ui-text-sm">{schoolName}</p>
                </div>

            </div>
            <p className="ui-text-sm">{desc}</p>
        </div>
    )
}