import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchPokemonComponent} from './search-pokemon.component';

describe('SearchPokemonComponent', () => {
  let component: SearchPokemonComponent;
  let fixture: ComponentFixture<SearchPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchPokemonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a input field', () => {
    expect(component).toBeTruthy('input');
  });

  it('should have a button', () => {
    expect(component).toBeTruthy('button');
  });
});
