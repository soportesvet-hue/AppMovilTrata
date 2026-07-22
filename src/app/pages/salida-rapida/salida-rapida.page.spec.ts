import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SalidaRapidaPage } from './salida-rapida.page';

describe('SalidaRapidaPage', () => {
  let component: SalidaRapidaPage;
  let fixture: ComponentFixture<SalidaRapidaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SalidaRapidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
