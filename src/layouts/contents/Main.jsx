import PostsList from "../../components/PostsList";
import PostItem from "../../components/PostItem";
import DefaultTitle from "../../components/DefaultTitle";
import Container from "../../components/Container";
import PrimaryButton from "../../components/PrimaryButton";
import { getNavigator } from "../../hooks/useNavigator";
import { useContext, useEffect, useState } from "react";
import useFetchPosts from "../../hooks/useFetchPosts";
import { PostsContext } from "../../contexts/PostsContext";


export default () => {

    let navigator = getNavigator()
    let posts = useContext(PostsContext)

    posts = posts.slice(0, 4)


    return (
            <div className="bg-gradient-to-b from-slate-950 to-slate-700 pt-16 min-h-screen">
                <Container className="pt-8 pb-16 sm:py-16">
                    <DefaultTitle className="ml-6 sm:ml-auto" name="Latest posts" />
                    <PostsList>{posts}</PostsList>
                    <div className="flex justify-center mt-16">
                        <PrimaryButton onClick={() => navigator('/posts')} to="/posts">All Posts!</PrimaryButton>
                    </div>
                </Container>
                
            </div>
    )
}