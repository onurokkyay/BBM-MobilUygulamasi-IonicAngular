import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfosLuckyComponent } from './infos-lucky.component';

describe('InfosLuckyComponent', () => {
  let component: InfosLuckyComponent;
  let fixture: ComponentFixture<InfosLuckyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosLuckyComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfosLuckyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
