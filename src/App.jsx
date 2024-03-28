import Header from "./layouts/Header"
import Footer from "./layouts/Footer"
import  { Routes , Route, BrowserRouter } from 'react-router-dom'
import Main from "./layouts/contents/Main"
import AboutUs from "./layouts/contents/AboutUs"
import Posts from "./layouts/contents/Posts"
import useFetchPosts from "./hooks/useFetchPosts"
import { PostsContext } from "./contexts/PostsContext"

function App() {

  let posts = useFetchPosts()

  return (
    <>
    <BrowserRouter basename="/react-roocket/" >
      <Header />
      <PostsContext.Provider value={ posts } >
          <Routes>
            <Route path="/" Component={Main} />
            <Route path="/posts" Component={Posts} />
            <Route path="/about" Component={AboutUs} />
          </Routes>
      </PostsContext.Provider>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
