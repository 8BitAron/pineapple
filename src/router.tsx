import {
  RouterProvider,
  Router,
  RouterContext,
  Outlet,
  Link,
} from "@tanstack/router";
import { AuthContext, useAuth } from "./auth";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { indexRoute } from "./routes";
import { dashboardIndexRoot } from "./routes/dashboard";

export const routerContext = new RouterContext<{
  auth: AuthContext;
}>();

export const rootRoute = routerContext.createRootRoute({
  component: () => {
    return (
      <>
        <Link to="/">home</Link> | <Link to="/dashboard">Dashboard</Link>
        <Outlet />
        <TanStackRouterDevtools />
      </>
    );
  },
});

// Create the route tree using your routes
const routeTree = rootRoute.addChildren([indexRoute, dashboardIndexRoot]);

// Create the router using your route tree
export const router = new Router({
  routeTree,
  context: {
    auth: undefined!, // injected by on render
  },
});

// Register your router for maximum type safety
declare module "@tanstack/router" {
  interface Register {
    router: typeof router;
  }
}

export const AppRouter = () => {
  return (
    <RouterProvider
      router={router}
      context={{
        auth: useAuth(),
      }}
    />
  );
};
