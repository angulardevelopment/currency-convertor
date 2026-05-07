import { Component } from '@angular/core';
import { CurrencyComponent } from './currency/currency.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CurrencyComponent]
})
export class AppComponent {
  title = 'currency-app';
}
