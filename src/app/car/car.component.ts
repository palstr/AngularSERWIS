import { Component } from '@angular/core';
import { SerwisAutoService } from '../serwis-auto.service';
import { Auto, Category } from '../auto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  cars:Auto[] = [];

  rodzaj = 'SUV';

  constructor(private serwis:SerwisAutoService){
    this.cars = serwis.getCars();
  }

  categories = ['SUV', 'Sedan', 'Kompakt', 'Sport', 'Dostawczy'];
}
