import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WideContentComponent } from './wide-content.component';

describe('WideContentComponent', () => {
  let component: WideContentComponent;
  let fixture: ComponentFixture<WideContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WideContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WideContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
