import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import { NewUrlService } from '../../services/index';
import { GenerateUrlComponent } from './generate-url.component';

describe('GenerateUrlComponent', () => {
  let component: GenerateUrlComponent;
  let fixture: ComponentFixture<GenerateUrlComponent>;
  let testService: NewUrlService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        GenerateUrlComponent
      ],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      providers: [
        NewUrlService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateUrlComponent);
    component = fixture.componentInstance;
    testService = TestBed.get(NewUrlService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onSubmit', () => {

    it('call the service and store the new url to display on screen', () => {
      spyOn(testService, 'saveUrl').and.callFake(() => {
        return Observable.of({"newUrl": "new.url1"});
      });
      component.onSubmit();
      console.log('testService', testService);
      expect(testService.saveUrl).toHaveBeenCalled();
      expect(component.newUrl).toEqual({"newUrl": "new.url1"});
    });

  });
});
