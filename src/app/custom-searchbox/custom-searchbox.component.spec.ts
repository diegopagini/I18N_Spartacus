import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSearchboxComponent } from './custom-searchbox.component';

describe('CustomSearchboxComponent', () => {
  let component: CustomSearchboxComponent;
  let fixture: ComponentFixture<CustomSearchboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomSearchboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSearchboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
