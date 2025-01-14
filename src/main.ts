import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http'; // Importando o HttpClient
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config'; // Importando o appConfig

// Inicializando a aplicação com o AppComponent standalone e fornecendo o HttpClient
bootstrapApplication(AppComponent, {
  providers: [
    ...appConfig.providers, // Mantendo os providers que já estavam no appConfig
    provideHttpClient(), // Adicionando o provider do HttpClient
  ],
}).catch((err) => console.error(err));
