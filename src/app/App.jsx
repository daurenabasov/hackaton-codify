import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import AppRoutes from "./routes/app.routes"
import Loader from "../components/Loader"




const App = () => {
  return (
    <BrowserRouter>
      <Provider store={setupStore}>
        <Suspense fallback={<Loader />}>
          <AppRoutes />
        </Suspense>
      </Provider>
    </BrowserRouter>
  );
};

export default App;