import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantonedashboardComponent } from './tenantonedashboard.component';

describe('TenantonedashboardComponent', () => {
  let component: TenantonedashboardComponent;
  let fixture: ComponentFixture<TenantonedashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TenantonedashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenantonedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
