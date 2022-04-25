import React, {Suspense} from "react";

export const Calendar = React.lazy(() => {
  return new Promise((resolve, reject) => setTimeout(resolve, 5 * 1000)).then(
    () => import("./4kImage")
  );
});

export default function CalendarComponent() {
  return (
    <div>
        <Suspense fallback={<div> Suspense Loading...... </div>}>
          <Calendar />
        </Suspense>
    </div>
  );
}