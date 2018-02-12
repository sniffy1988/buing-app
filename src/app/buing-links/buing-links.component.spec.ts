import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuingLinksComponent } from './buing-links.component';

describe('BuingLinksComponent', () => {
  let component: BuingLinksComponent;
  let fixture: ComponentFixture<BuingLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuingLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuingLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
