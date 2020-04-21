import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KindoDialogComponent } from './kindo-dialog.component';

describe('KindoDialogComponent', () => {
  let component: KindoDialogComponent;
  let fixture: ComponentFixture<KindoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KindoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KindoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
