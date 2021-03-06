import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ children, path }) => {
  const renderChildren = () => {
    const token = localStorage.getItem('jwt');
    if (token) {
      return (
        children
      );
    }
    return (
      <Redirect to='/' />
    );
  };

  return (
    <Route path={ path } >
      {
        renderChildren()
      }
    </Route>
  );
};

export default ProtectedRoute;
