import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server'; // Certifique-se de que está correto.

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
