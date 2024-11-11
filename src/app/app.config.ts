import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';
import { withNgxsFormPlugin } from '@ngxs/form-plugin';
import { withNgxsLoggerPlugin } from '@ngxs/logger-plugin';
import { withNgxsRouterPlugin } from '@ngxs/router-plugin';
import { withNgxsStoragePlugin } from '@ngxs/storage-plugin';
import { provideStore } from '@ngxs/store';
import { withNgxsWebSocketPlugin } from '@ngxs/websocket-plugin';

import { routes } from './app.routes';
import {
  DEVTOOLS_REDUX_CONFIG,
  LOGGER_CONFIG,
  OPTIONS_CONFIG,
  STATES_MODULES,
} from './store/store.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideStore(
      STATES_MODULES,
      OPTIONS_CONFIG,
      withNgxsReduxDevtoolsPlugin(DEVTOOLS_REDUX_CONFIG),
      withNgxsFormPlugin(),
      withNgxsLoggerPlugin(LOGGER_CONFIG),
      withNgxsRouterPlugin(),
      withNgxsStoragePlugin({ keys: '*' }),
      withNgxsWebSocketPlugin()
    ),
  ],
};
