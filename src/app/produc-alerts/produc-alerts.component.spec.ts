import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducAlertsComponent } from './produc-alerts.component';

describe('ProducAlertsComponent', () => {
  let component: ProducAlertsComponent;
  let fixture: ComponentFixture<ProducAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducAlertsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProducAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
