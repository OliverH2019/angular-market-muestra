import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-produc-alerts',
  templateUrl: './produc-alerts.component.html',
  styleUrls: ['./produc-alerts.component.css'],
})
export class ProducAlertsComponent {
  @Input() product!: Product | undefined;
  @Output() notify = new EventEmitter();
}
