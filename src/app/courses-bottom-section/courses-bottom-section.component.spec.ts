import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesBottomSectionComponent } from './courses-bottom-section.component';

describe('CoursesBottomSectionComponent', () => {
  let component: CoursesBottomSectionComponent;
  let fixture: ComponentFixture<CoursesBottomSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesBottomSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesBottomSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
