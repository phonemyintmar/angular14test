import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNormalComponent } from './test-normal.component';

describe('TestNormalComponent', () => {
  let component: TestNormalComponent;
  let fixture: ComponentFixture<TestNormalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestNormalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
