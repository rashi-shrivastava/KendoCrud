import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KindoFormComponent } from './kindo-form.component';

describe('KindoFormComponent', () => {
  let component: KindoFormComponent;
  let fixture: ComponentFixture<KindoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KindoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KindoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
