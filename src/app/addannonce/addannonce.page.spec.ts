import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddannoncePage } from './addannonce.page';

describe('AddannoncePage', () => {
  let component: AddannoncePage;
  let fixture: ComponentFixture<AddannoncePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddannoncePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
