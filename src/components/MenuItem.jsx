import { Link } from "react-router-dom";

export default ({ role , properties : item , dispatcher }) => {
    if (role == "primary") {
        return (
            <Link
                to={item.to}
                onClick={() => dispatcher(item.to)}
                className={ 
                    (item.active ? 
                        'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white')
                        .concat(' rounded-md px-3 py-2 text-sm font-medium')
                }
                >
                {item.name}
            </Link>
        )
    } else if (role == "secondary") {
        return (
            <Link
                to={item.to}
                onClick={() => dispatcher(item.to)}
                className={
                    (item.active ? 
                    'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white')
                    .concat(' block rounded-md px-3 py-2 text-base font-medium')
                }
                >
                {item.name}
            </Link>
        )
    }
}
