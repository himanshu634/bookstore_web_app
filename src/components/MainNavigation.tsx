import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import BookList from "../pages/book_listing";
import { RoutePaths } from "../utils/enum";
// import { RoutePaths } from "../utils/enum";

//component lazy loading
const Login = lazy(() => import("../pages/login/index"));
const Register = lazy(() => import("../pages/register"));

const AppRoutes: React.FC = () => {
   return (
      <Switch>
         <Route exact path={RoutePaths.Login} component={Login} />
         <Route exact path={RoutePaths.Register} component={Register} />
         <Route exact path={RoutePaths.BookListing} component={BookList} />
      </Switch>
   );
};

export default AppRoutes;
