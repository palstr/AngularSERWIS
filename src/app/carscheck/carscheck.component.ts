import { Component } from '@angular/core';
import { SerwisAutoService } from '../serwis-auto.service';
import { Auto, Category } from '../auto';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-carscheck',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './carscheck.component.html',
  styleUrl: './carscheck.component.css'
})
export class CarscheckComponent {
  cars:Auto[] = [];

  constructor(private serwis:SerwisAutoService){
    this.cars = serwis.getCars();
  }

  suvcheck = false;
  sedancheck = false;
  kompaktcheck = false;
  sportcheck = false;
  dostawcheck = false;
}
