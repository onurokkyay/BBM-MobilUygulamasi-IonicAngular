import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfosFromuserComponent } from './infos-fromuser.component';

describe('InfosFromuserComponent', () => {
  let component: InfosFromuserComponent;
  let fixture: ComponentFixture<InfosFromuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosFromuserComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfosFromuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
