import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarComponent } from './car/car.component';
import { CarscheckComponent } from './carscheck/carscheck.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarComponent, CarscheckComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mamsrake';

  categories = ['SUV', 'Sedan', 'Kompakt', 'Sport', 'Dostawczy'];
}
