import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuteursComponent } from './auteurs.component';

describe('AuteursComponent', () => {
  let component: AuteursComponent;
  let fixture: ComponentFixture<AuteursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuteursComponent]
    });
    fixture = TestBed.createComponent(AuteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
