import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KindoGridComponent } from './kindo-grid.component';

describe('KindoGridComponent', () => {
  let component: KindoGridComponent;
  let fixture: ComponentFixture<KindoGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KindoGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KindoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
