import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvEpisodesComponent } from './tv-episodes.component';

describe('TvEpisodesComponent', () => {
  let component: TvEpisodesComponent;
  let fixture: ComponentFixture<TvEpisodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvEpisodesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvEpisodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
