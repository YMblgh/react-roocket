import { Link } from "react-router-dom";
import PostsList from "../../components/PostsList";
import PostItem from "../../components/PostItem";
import Container from "../../components/Container";
import DefaultTitle from "../../components/DefaultTitle";
import { useContext, useEffect, useReducer, useRef, useState } from "react";
import useFetchPosts from "../../hooks/useFetchPosts";
import { PostsContext } from "../../contexts/PostsContext";

export default () => {

    let posts = useContext(PostsContext)

    return (
        <div className="bg-gradient-to-br from-slate-950 to-slate-700 pt-16 min-h-screen">
            <Container className="pt-8 pb-16 sm:py-16">
                <DefaultTitle className="ml-6 sm:ml-auto" name="Posts" />
                <PostsList>{posts}</PostsList>
            </Container>
        </div>
    )
}