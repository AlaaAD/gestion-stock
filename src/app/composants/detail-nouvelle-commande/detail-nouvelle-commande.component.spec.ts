import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailNouvelleCommandeComponent } from './detail-nouvelle-commande.component';

describe('DetailNouvelleCommandeComponent', () => {
  let component: DetailNouvelleCommandeComponent;
  let fixture: ComponentFixture<DetailNouvelleCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailNouvelleCommandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailNouvelleCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
