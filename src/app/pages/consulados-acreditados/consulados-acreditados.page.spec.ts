import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsuladosAcreditadosPage } from './consulados-acreditados.page';

describe('ConsuladosAcreditadosPage', () => {
  let component: ConsuladosAcreditadosPage;
  let fixture: ComponentFixture<ConsuladosAcreditadosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsuladosAcreditadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
