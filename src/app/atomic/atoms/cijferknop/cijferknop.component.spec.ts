import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CijferknopComponent } from './cijferknop.component';

describe('CijferknopComponent', () => {
  let component: CijferknopComponent;
  let fixture: ComponentFixture<CijferknopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CijferknopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CijferknopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
