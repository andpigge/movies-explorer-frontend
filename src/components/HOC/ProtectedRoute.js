import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ children, path }) => {
  const renderChildren = () => {
    const token = localStorage.getItem('jwt');
    console.log(path)
    if (token) {
      return (
        children
      );
    }
    return (
      <Redirect to='/signin' />
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
