import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitProposalInEthComponent } from './submit-proposal-in-eth.component';

describe('SubmitProposalInEthComponent', () => {
  let component: SubmitProposalInEthComponent;
  let fixture: ComponentFixture<SubmitProposalInEthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitProposalInEthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitProposalInEthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
