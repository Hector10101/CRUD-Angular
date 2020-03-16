import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliProveedorComponent } from './eli-proveedor.component';

describe('EliProveedorComponent', () => {
  let component: EliProveedorComponent;
  let fixture: ComponentFixture<EliProveedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliProveedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
