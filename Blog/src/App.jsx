import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";
import { Blog } from "./components/screens";
import { BlogForm } from "./components/page/BlogForm";
import { Error404 } from "./ui/Error404";
import Layout from "./Layout";
import { FullBlog } from "./components/page/FullBlog";
import BlogList from "./components/page/BlogList";
import { Category } from "./components/page";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Blog />} />
            <Route path="/blog-list" element={<BlogList />} />
            <Route path="/post-by-category" element={<Category />} />
            <Route path="/create-blog" element={<BlogForm />} />
            <Route path="/full-blog" element={<FullBlog />} />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
