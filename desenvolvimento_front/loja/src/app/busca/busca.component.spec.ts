import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuscaComponent } from './busca.component';

describe('BuscaComponent', () => {
  let component: BuscaComponent;
  let fixture: ComponentFixture<BuscaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
