import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {DisplayComponent} from './atomic/atoms/display/display.component';
import {CijferknopComponent} from './atomic/atoms/cijferknop/cijferknop.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DisplayComponent,
        CijferknopComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should add numbers to an array', () => {
    const app = new AppComponent();
    app.addNummer(8);
    app.addNummer(3);
    app.addNummer(5);
    expect(app.aangeklikteNummers).toEqual([8, 3, 5]);
  });

  it('should add numbers', () => {
    const app = new AppComponent();
    app.addNummer(8);
    app.addNummer(3);
    app.addNummer(5);
    app.setOperand('+');
    app.addNummer(2);
    app.bereken();
    expect(app.uitkomst).toEqual(837);
  });

  it('should subtract numbers', () => {
    const app = new AppComponent();
    app.addNummer(2);
    app.addNummer(2);
    app.addNummer(2);
    app.setOperand('-');
    app.addNummer(2);
    app.bereken();
    expect(app.uitkomst).toEqual(220);
  });

  it('should multiply numbers', () => {
    const app = new AppComponent();
    app.addNummer(9);
    app.setOperand('*');
    app.addNummer(9);
    app.bereken();
    expect(app.uitkomst).toEqual(81);
  });

  it('should divise numbers', () => {
    const app = new AppComponent();
    app.addNummer(9);
    app.setOperand('/');
    app.addNummer(3);
    app.bereken();
    expect(app.uitkomst).toEqual(3);
  });

  it('should add consecutive numbers', () => {
    const app = new AppComponent();
    app.addNummer(9);
    app.setOperand('+');
    app.addNummer(3);
    app.setOperand('+');
    expect(app.uitkomst).toEqual(12);
    app.addNummer(4);
    app.bereken();
    expect(app.uitkomst).toEqual(16);
  });

  it('should do consecutive operations multiply edition', () => {
    const app = new AppComponent();
    app.addNummer(9);
    app.setOperand('+');
    app.addNummer(3);
    app.setOperand('*');
    expect(app.uitkomst).toEqual(12);
    app.addNummer(4);
    app.bereken();
    expect(app.uitkomst).toEqual(48);
  });

  it('should do consecutive operations division edition', () => {
    const app = new AppComponent();
    app.addNummer(9);
    app.setOperand('-');
    app.addNummer(3);
    app.setOperand('/');
    expect(app.uitkomst).toEqual(6);
    app.addNummer(4);
    app.bereken();
    expect(app.uitkomst).toEqual(1.5);
  });

  it('should do consecutive operations long edition', () => {
    const app = new AppComponent();
    app.addNummer(9);
    app.setOperand('+');
    app.addNummer(3);
    app.setOperand('/');
    expect(app.uitkomst).toEqual(12);
    app.addNummer(4);
    app.setOperand('*');
    expect(app.uitkomst).toEqual(3);
    app.addNummer(10);
    app.setOperand('-');
    expect(app.uitkomst).toEqual(30);
    app.addNummer(5);
    app.bereken();
    expect(app.uitkomst).toEqual(25);
  });
});
