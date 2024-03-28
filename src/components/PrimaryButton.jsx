import { Link } from "react-router-dom"

export default ({ children , to , onClick }) => {
    return (
        <Link onClick={onClick} className="text-gray-200 bg-gray-800 duration-200 rounded-lg shadow-md  px-16 py-3 hover:bg-gray-900 outline-none" to={to} >
            {children}
        </Link>
    )
}