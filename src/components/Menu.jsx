import { Link } from "react-router-dom"
import MenuItem from "./MenuItem"
import { Disclosure } from "@headlessui/react"

export default ({ role , children : navigation , dispatcher }) => {
    if (role == "primary") {
        return (
            <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                    {navigation.map((item) => (
                        <MenuItem role={role} key={item.name} properties={item} dispatcher={dispatcher} />
                    ))}
                </div>
            </div>
        )
    } else if (role == "secondary") {
        return (
            <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                    <MenuItem role={role} key={item.name} properties={item} dispatcher={dispatcher} />
                ))}
                </div>
            </Disclosure.Panel>
        )
    }
}