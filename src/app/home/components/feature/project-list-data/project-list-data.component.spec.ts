import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDataComponent } from './project-list-data.component';

describe('ProjectDataComponent', () => {
  let component: ProjectDataComponent;
  let fixture: ComponentFixture<ProjectDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProjectDataComponent],
    });
    fixture = TestBed.createComponent(ProjectDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
