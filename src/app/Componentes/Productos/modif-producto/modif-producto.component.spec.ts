import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifProductoComponent } from './modif-producto.component';

describe('ModifProductoComponent', () => {
  let component: ModifProductoComponent;
  let fixture: ComponentFixture<ModifProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
