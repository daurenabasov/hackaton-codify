import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import AppRoutes from "./routes/app.routes"



const App = () => {
  return (
    <BrowserRouter>
      <Provider store={setupStore}>
        <AppRoutes />
      </Provider>
    </BrowserRouter>
  );
};

export default App;