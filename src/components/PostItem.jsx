import { Link } from "react-router-dom"
import hourAMPM from "../hooks/useAMPM"

export default ({ data }) => {
    
    // console.log(data)
    let date = new Date(data.datePosted)


    return (
        <Link className="bg-white rounded-3xl shadow-md p-4 delay-75 duration-500 sm:hover:-translate-y-2 sm:hover:scale-105 space-y-5 flex flex-col justify-between">
            <div className="space-y-3">
            <img className="w-full aspect-video rounded-2xl object-cover shadow-xl shadow-slate-700" src={data.postImg} alt="" />
            <h3 className="font-semibold text-xl text-ellipsis line-clamp-2">{data.title}</h3>
            <p className="text-slate-400 line-clamp-3">{data.desc}</p>
            </div>
            <div className="flex justify-between">
                <span className="font-bold font-mono text-sm text-slate-700">{`${date.getDay()} ${data.month} ${date.getFullYear()}`}</span>
                <span className="font-bold font-mono text-sm text-slate-700">{hourAMPM(date)}</span>
            </div>
        </Link>
    )
}