import { Route, redirect } from "@tanstack/router";
import { rootRoute, router } from "../../router";
import { AuthError } from "../../auth";

export const dashboardIndexRoot = new Route({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: Dashboard,
  beforeLoad: () => {
    if (!router.options.context.auth.email) {
      throw AuthError;
    }
  },
  onBeforeLoadError: (error) => {
    if (error === AuthError) {
      throw redirect({
        to: "/",
        search: {
          // Use location (not location) to get the live url
          // (as opposed to the committed url, which is technically async
          // and resolved after the pending state)
          redirect: router.state.location.href,
        },
      });
    }

    throw error;
  },
});

function Dashboard() {
  return (
    <div className="">
      <div className="">Dashboard</div>
    </div>
  );
}
