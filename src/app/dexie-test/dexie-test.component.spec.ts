import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DexieTestComponent } from './dexie-test.component';

describe('DexieTestComponent', () => {
  let component: DexieTestComponent;
  let fixture: ComponentFixture<DexieTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DexieTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DexieTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
