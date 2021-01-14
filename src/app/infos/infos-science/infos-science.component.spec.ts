import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfosScienceComponent } from './infos-science.component';

describe('InfosScienceComponent', () => {
  let component: InfosScienceComponent;
  let fixture: ComponentFixture<InfosScienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosScienceComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfosScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
