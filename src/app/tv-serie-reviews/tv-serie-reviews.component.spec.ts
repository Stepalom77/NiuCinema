import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvSerieReviewsComponent } from './tv-serie-reviews.component';

describe('TvSerieReviewsComponent', () => {
  let component: TvSerieReviewsComponent;
  let fixture: ComponentFixture<TvSerieReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvSerieReviewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvSerieReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
