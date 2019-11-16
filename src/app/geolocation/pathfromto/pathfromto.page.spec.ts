import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PathfromtoPage } from './pathfromto.page';

describe('PathfromtoPage', () => {
  let component: PathfromtoPage;
  let fixture: ComponentFixture<PathfromtoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathfromtoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PathfromtoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
