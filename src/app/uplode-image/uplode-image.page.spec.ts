import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UplodeImagePage } from './uplode-image.page';

describe('UplodeImagePage', () => {
  let component: UplodeImagePage;
  let fixture: ComponentFixture<UplodeImagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UplodeImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
