import React from 'react';
import ReactDOM from 'react-dom';

import { App } from 'app/App';
import { AppProviders } from 'app/AppProviders/AppProviders';

ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>,
  document.getElementById('root'),
);
