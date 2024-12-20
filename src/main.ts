import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';

// Inicialização do vídeo após o DOM ser carregado
document.addEventListener('DOMContentLoaded', () => {
  const videoElement = document.querySelector('header.masthead video') as HTMLVideoElement;
  if (videoElement) {
    videoElement.muted = true; // Garante que o autoplay seja permitido
    videoElement.play().catch((error) => {
      console.error('Não foi possível iniciar o vídeo automaticamente:', error);
    });
  }
});

// Inicialização do Angular
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Passa as rotas configuradas
    provideHttpClient(), // Configuração global do HttpClient com interceptores
  ],
}).catch(err => console.error(err));
