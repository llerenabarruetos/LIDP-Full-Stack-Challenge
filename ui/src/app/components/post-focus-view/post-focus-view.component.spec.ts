import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFocusViewComponent } from './post-focus-view.component';

describe('PostFocusViewComponent', () => {
  let component: PostFocusViewComponent;
  let fixture: ComponentFixture<PostFocusViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostFocusViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostFocusViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
