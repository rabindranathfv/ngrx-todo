import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponentsComponent } from './todo-components.component';

describe('TodoComponentsComponent', () => {
  let component: TodoComponentsComponent;
  let fixture: ComponentFixture<TodoComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
