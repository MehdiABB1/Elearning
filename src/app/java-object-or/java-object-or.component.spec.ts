import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaObjectOrComponent } from './java-object-or.component';

describe('JavaObjectOrComponent', () => {
  let component: JavaObjectOrComponent;
  let fixture: ComponentFixture<JavaObjectOrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavaObjectOrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavaObjectOrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
