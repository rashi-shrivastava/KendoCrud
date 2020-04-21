import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KindoTempDrivenComponent } from './kindo-temp-driven.component';

describe('KindoTempDrivenComponent', () => {
  let component: KindoTempDrivenComponent;
  let fixture: ComponentFixture<KindoTempDrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KindoTempDrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KindoTempDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
