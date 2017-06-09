import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaoyisaoComponent } from './saoyisao.component';

describe('SaoyisaoComponent', () => {
  let component: SaoyisaoComponent;
  let fixture: ComponentFixture<SaoyisaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaoyisaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaoyisaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
