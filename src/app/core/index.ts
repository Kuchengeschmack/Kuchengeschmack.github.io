import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Modules } from './modules';
import { Routers } from './routers';

export const Core = [CommonModule, FormsModule, ...Modules, ...Routers];
