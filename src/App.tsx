import React, {Suspense, useState} from 'react';
import './App.css';
import CalendarComponent from './sections/example';

const DefaultApp = React.lazy(() => import("./sections/DefaultApp"));

function App() {
  const [user, setUser] = useState<boolean>(false);

  if (user) {
    return (
      // fallback component is rendered until our main component is loaded
      <Suspense fallback={<div>Loading</div>}>
        <button onClick={() => setUser(false)} > Change User </button>
        <CalendarComponent />
      </Suspense>
    );
  } else {
    return (
      <Suspense fallback={<div>Loading</div>}>
        <button onClick={() => setUser(true)} > Change User </button>
        <DefaultApp />
      </Suspense>
    );
  }
}

export default App;