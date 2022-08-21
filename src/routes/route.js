import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
// import { Api } from "../utils/Api";

const AppRoute = ({
  component: Component,
  layout: Layout,
  isAuthProtected,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        );
      }}
      exact
    />
  );
};

export default AppRoute;
