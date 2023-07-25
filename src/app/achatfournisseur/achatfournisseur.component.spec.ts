import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchatfournisseurComponent } from './achatfournisseur.component';

describe('AchatfournisseurComponent', () => {
  let component: AchatfournisseurComponent;
  let fixture: ComponentFixture<AchatfournisseurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AchatfournisseurComponent]
    });
    fixture = TestBed.createComponent(AchatfournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
