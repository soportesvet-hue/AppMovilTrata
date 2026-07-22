import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsuladosGuatemalaPage } from './consulados-guatemala.page';

describe('ConsuladosGuatemalaPage', () => {
  let component: ConsuladosGuatemalaPage;
  let fixture: ComponentFixture<ConsuladosGuatemalaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsuladosGuatemalaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
