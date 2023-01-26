import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostLightViewComponent } from './post-light-view.component';

describe('PostLightViewComponent', () => {
  let component: PostLightViewComponent;
  let fixture: ComponentFixture<PostLightViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostLightViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostLightViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
