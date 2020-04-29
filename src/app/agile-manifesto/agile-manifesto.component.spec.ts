import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgileManifestoComponent } from './agile-manifesto.component';

describe('AgileManifestoComponent', () => {
  let component: AgileManifestoComponent;
  let fixture: ComponentFixture<AgileManifestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgileManifestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgileManifestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
