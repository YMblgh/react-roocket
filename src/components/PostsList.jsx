import { Link } from "react-router-dom";
import PostItem from "./PostItem";

export default ({ children }) => {



    return (
        <div className="grid mx-auto w-11/12 sm:grid-cols-2 sm:w-auto md:grid-cols-2 md:w-9/12 lg:grid-cols-3 lg:w-11/12 xl:grid-cols-4 xl:w-full gap-8 lg:gap-8 mt-8">
            {/* {children} */}

            {
                children?.map(data => {
                    return <PostItem key={data.id} data={data} />
                })
            }
        </div>
    )
}