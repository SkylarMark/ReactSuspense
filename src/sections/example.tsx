import React, {Suspense} from "react";

const Calendar = React.lazy(() => {
  return new Promise((resolve, reject) => setTimeout(resolve, 5 * 1000)).then(
    () =>
      Math.floor(Math.random() * 10) >= 4
        ? import("./4kImage")
        : Promise.reject(new Error())
  );
});

export default function CalendarComponent() {
  return (
    <div>
        <Suspense fallback={<div> Loading...... </div>}>
          <Calendar />
        </Suspense>
    </div>
  );
}