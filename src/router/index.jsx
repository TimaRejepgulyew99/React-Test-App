import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";
import PostPage from "../pages/posts";
import CurrentPost from "../pages/posts/_id";
import AboutPage from "../pages/about";
import Menu from "../components/Layout/Menu";
export default function Router() {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route exact path="/posts">
          <PostPage />
        </Route>
        <Route exact path="/posts/:id">
          <CurrentPost />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Redirect to="/posts" />
      </Switch>
    </BrowserRouter>
  );
}
