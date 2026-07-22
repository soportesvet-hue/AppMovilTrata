import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VisitasGuatemalaPage } from './visitas-guatemala.page';

describe('VisitasGuatemalaPage', () => {
  let component: VisitasGuatemalaPage;
  let fixture: ComponentFixture<VisitasGuatemalaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitasGuatemalaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
