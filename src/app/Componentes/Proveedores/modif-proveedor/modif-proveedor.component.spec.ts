import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifProveedorComponent } from './modif-proveedor.component';

describe('ModifProveedorComponent', () => {
  let component: ModifProveedorComponent;
  let fixture: ComponentFixture<ModifProveedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifProveedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
