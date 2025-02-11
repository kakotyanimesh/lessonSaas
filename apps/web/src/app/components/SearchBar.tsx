
import { Filter } from 'lucide-react';

export default function SearchBar(){
    return (
        <div className="flex flex-row justify-between items-center ">
            <input placeholder='search' className="py-2 px-3 w-full rounded-md outline-none border-2 hover:border-slate-400 transition duration-600"/>
            {/* <Filter color="#164fd4" /> */}
        </div>
    )
}