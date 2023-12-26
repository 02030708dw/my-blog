import About from '@/views/About';
import Blog from '@/views/Blog';
import Home from '@/views/Home';
import Message from '@/views/Message';
import Project from '@/views/Project';
import Detail from '@/views/Blog/Detail';

export default [
  { name: "Home", path: '/', component: Home },
  { name: "About", path: '/about', component: About },
  { name: "Blog", path: '/blog', component: Blog },
  { name: "BlogDetail", path: '/blog/:id', component: Detail },
  { name: "CategoryBlog", path: '/blog/cate/:categoryId', component: Blog },
  { name: "Message", path: '/message', component: Message },
  { name: "Project", path: '/project', component: Project },
];