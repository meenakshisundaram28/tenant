import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenanttwodashboardComponent } from './tenanttwodashboard.component';

describe('TenanttwodashboardComponent', () => {
  let component: TenanttwodashboardComponent;
  let fixture: ComponentFixture<TenanttwodashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TenanttwodashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenanttwodashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
