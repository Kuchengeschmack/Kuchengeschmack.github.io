import { NgxsDevtoolsOptions } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginOptions } from '@ngxs/logger-plugin';
import { NgxsConfig } from '@ngxs/store';

import { AuthState } from './auth/auth.state';

export const STATES_MODULES = [AuthState];

export const OPTIONS_CONFIG: Partial<NgxsConfig> = {
  developmentMode: true,
};

export const DEVTOOLS_REDUX_CONFIG: NgxsDevtoolsOptions = {
  disabled: false,
};

export const LOGGER_CONFIG: NgxsLoggerPluginOptions = {
  disabled: false,
};
