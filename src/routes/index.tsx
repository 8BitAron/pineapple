import { Outlet, Route, redirect } from "@tanstack/router";
import { rootRoute, router } from "../router";
import { AuthError, useAuth } from "../auth";
import { useState } from "react";

export const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
  beforeLoad: () => {
    if (!router.p) {
    }
  },
});

function Home() {
  const [email, setEmail] = useState("");
  const auth = useAuth();

  if (auth.email) {
    redirect({ to: "/dashboard" });
    return;
  }

  return (
    <div>
      <div className="">
        Login
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={() => auth.login(email)}>Login</button>
      </div>
    </div>
  );
}
