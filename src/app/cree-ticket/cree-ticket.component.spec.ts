import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreeTicketComponent } from './cree-ticket.component';

describe('CreeTicketComponent', () => {
  let component: CreeTicketComponent;
  let fixture: ComponentFixture<CreeTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreeTicketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreeTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
