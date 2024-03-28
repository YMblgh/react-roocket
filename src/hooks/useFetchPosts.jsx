import { useEffect, useState } from "react";

export default ( obj = { page : "" , limit : "" } ) => {
    let [ posts , setPosts] = useState([])


    async function getData() {

        const address = "https://660453ae2393662c31d12ede.mockapi.io/posts"

        const url = new URL(address);
        url.searchParams.append('page', obj.page)
        url.searchParams.append('limit', obj.limit)
        url.searchParams.append('sortBy', 'datePosted')
        url.searchParams.append('order', 'desc')

        let res = await fetch(url, {
        method : "get",
        headers: {'content-type':'application/json'},
        })
        res = await res.json()
        // console.log(res);
        setPosts(res)
    }

    useEffect(() => {
        getData()
    }, [])

    return posts
}