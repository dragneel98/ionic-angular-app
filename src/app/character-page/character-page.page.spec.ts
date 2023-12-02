import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterPagePage } from './character-page.page';

describe('CharacterPagePage', () => {
  let component: CharacterPagePage;
  let fixture: ComponentFixture<CharacterPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CharacterPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
