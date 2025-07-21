import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TachtechniqueComponent } from './tachtechnique.component';

describe('TachtechniqueComponent', () => {
  let component: TachtechniqueComponent;
  let fixture: ComponentFixture<TachtechniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TachtechniqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TachtechniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
