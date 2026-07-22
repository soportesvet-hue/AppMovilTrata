import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AprendeTrataPage } from './aprende-trata.page';

describe('AprendeTrataPage', () => {
  let component: AprendeTrataPage;
  let fixture: ComponentFixture<AprendeTrataPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AprendeTrataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
