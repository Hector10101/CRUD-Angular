import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliProductoComponent } from './eli-producto.component';

describe('EliProductoComponent', () => {
  let component: EliProductoComponent;
  let fixture: ComponentFixture<EliProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
