import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementSignatureComponent } from './statement-signature.component';

describe('StatementSignatureComponent', () => {
  let component: StatementSignatureComponent;
  let fixture: ComponentFixture<StatementSignatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatementSignatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatementSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
