import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvEpisodeReviewsComponent } from './tv-episode-reviews.component';

describe('TvEpisodeReviewsComponent', () => {
  let component: TvEpisodeReviewsComponent;
  let fixture: ComponentFixture<TvEpisodeReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvEpisodeReviewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvEpisodeReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
