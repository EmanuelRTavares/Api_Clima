import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Para [(ngModel)]
import { WeatherService } from '../../weather.service'; // Serviço
import { HttpErrorResponse } from '@angular/common/http'; // Para tratar erros HTTP
import { CommonModule } from '@angular/common'; // Importe o CommonModule

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  cidade: string = '';
  weatherData: any = {};
   errorMessage: string | null = null;

  constructor(private weatherService: WeatherService) {}

     searchCity() {
    this.errorMessage = null; // Limpa a mensagem de erro anterior
    this.weatherService.getWeather(this.cidade).subscribe({
      next: (data) => {
        this.weatherData = data;  // Preenche weatherData com os dados da API
      },
      error: (error: HttpErrorResponse) => {
        // Se o erro for 404 (cidade não encontrada), mostra uma mensagem personalizada
        if (error.status === 404) {
          this.errorMessage = 'Cidade não encontrada. Verifique o nome e tente novamente.';
        } else {
          // Para outros erros (problemas de rede, servidor, etc.)
          this.errorMessage = error.message || 'Erro desconhecido. Tente novamente mais tarde.';
        }
      }
    });
  
  }
}
