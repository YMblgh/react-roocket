import { Disclosure } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

export default ({ isOpen }) => {
    return (
        <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white outline-none">
            <span className="absolute -inset-0.5" />
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
            ) : (
            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            )}
        </Disclosure.Button>
    )
}