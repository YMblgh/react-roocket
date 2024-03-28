import { BellIcon } from "@heroicons/react/24/outline"

export default () => {
    return (
        <button 
            className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none">
            <BellIcon className="h-6 w-6" aria-hidden="true" />
        </button>
    )
}