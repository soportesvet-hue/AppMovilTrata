import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViajasExtranjeroPage } from './viajas-extranjero.page';

describe('ViajasExtranjeroPage', () => {
  let component: ViajasExtranjeroPage;
  let fixture: ComponentFixture<ViajasExtranjeroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajasExtranjeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
