import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZonaJovenPage } from './zona-joven.page';

describe('ZonaJovenPage', () => {
  let component: ZonaJovenPage;
  let fixture: ComponentFixture<ZonaJovenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonaJovenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
