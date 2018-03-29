import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ArtworkDetailsComp } from './artwork-details.component';

describe('ArtworkDetails', () => {
  let component: ArtworkDetailsComp;
  let fixture: ComponentFixture<ArtworkDetailsComp>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtworkDetailsComp ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtworkDetailsComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
