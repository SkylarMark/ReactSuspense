import React, { Suspense, useState, useTransition } from "react";
import "./App.css";
import CalendarComponent, { Calendar } from "./sections/example";

const DefaultApp = React.lazy(() => import("./sections/DefaultApp"));

export function SuspenseApp() {
  const [user, setUser] = useState<boolean>(false);

  if (user) {
    return (
      <div>
        <button onClick={() => setUser(false)}> Go Back!! </button>
        <CalendarComponent />
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={() => setUser(true)}> Suspence!! </button>
        <DefaultApp />
      </div>
    );
  }
}

export function TransitionApp() {
  const [user, setUser] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition();

  if (isPending) {
    return <div> Transition Loading ..... </div>;
  }

  if (user) {
    return (
      // fallback component is rendered until our main component is loaded
      <div>
        <button
          onClick={() =>
            startTransition(() => {
              setUser(false);
            })
          }
        >
          Go Back!!
        </button>
        <Calendar />
      </div>
    );
  } else {
    return (
      <div>
        <button
          onClick={() =>
            startTransition(() => {
              setUser(true);
            })
          }
        >
          Transition!!
        </button>
        <DefaultApp />
      </div>
    );
  }
}
