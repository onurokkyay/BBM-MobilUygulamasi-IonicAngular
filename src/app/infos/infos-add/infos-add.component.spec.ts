import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfosAddComponent } from './infos-add.component';

describe('InfosAddComponent', () => {
  let component: InfosAddComponent;
  let fixture: ComponentFixture<InfosAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosAddComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfosAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
