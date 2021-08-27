import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";
import PostPage from "../pages/posts";
import AboutPage from "../pages/about";
import Menu from "../components/Layout/Menu";
export default function Router() {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/posts">
          <PostPage />
        </Route>
        <Route path="/posts/:id">
          <PostPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Redirect to="/posts" />
      </Switch>
    </BrowserRouter>
  );
}
