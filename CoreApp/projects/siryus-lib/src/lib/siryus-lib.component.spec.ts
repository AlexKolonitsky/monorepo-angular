import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiryusLibComponent } from './siryus-lib.component';

describe('SiryusLibComponent', () => {
  let component: SiryusLibComponent;
  let fixture: ComponentFixture<SiryusLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiryusLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiryusLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
