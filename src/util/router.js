/**
 * Authors:    Sourav Kumar Nanda @souravkumarnanda4@gmail.com
 * Created:    10.08.2019
 * Purpose:    I understand the importance of comment lines in big projects. While setting up a new function, I will try to write
 *             some inline comments, descriptive block comments etc. to briefly explain how things work. 

 **/

import React, { createContext, useContext, useEffect } from "react";
import { Router as RouterOriginal, withRouter } from "react-router-dom";
import queryString from "query-string";
import { createBrowserHistory } from "history";
export const history = createBrowserHistory();

// <RouterContextProvider> gets routerProps (match, location, history)
// using the withRouter HOC and makes them available to useRouter via context.
const RouterContext = createContext();
const RouterContextProvider = withRouter(({ children, ...routerProps }) => {
  return (
    <RouterContext.Provider history={history} value={routerProps}>
      {children}
    </RouterContext.Provider>
  );
});

// Export <Router> component that wraps children with above <RouterContextProvider>
// We also inclide <ScrollManager /> to scroll to top on route change.
export function Router({ children }) {
  return (
    <RouterOriginal history={history}>
      <RouterContextProvider>
        <ScrollToTop />
        {children}
      </RouterContextProvider>
    </RouterOriginal>
  );
}

// Export our hook for getting router object inside any component
export function useRouter() {
  // Get routerProps from context
  const routerProps = useContext(RouterContext);

  // Throw error if no routerProps (means we aren't inside <Router>)
  if (!routerProps) {
    throw new Error("useRouter may only be called within <Router />");
  }

  // Return our custom router object
  return {
    // For convenience add push(), replace(), pathname at top level
    push: routerProps.history.push,
    replace: routerProps.history.replace,
    pathname: routerProps.location.pathname,
    query: {
      ...queryString.parse(routerProps.location.search),
      ...routerProps.match.params
    },
    ...routerProps
  };
}

// This can be customized if you need more advanced scroll behavior
function ScrollToTop() {
  const router = useRouter();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router.pathname]);
  return null;
}

// Export other react-router components
export { Route, Switch, Link, NavLink } from "react-router-dom";
