import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { HomePageComponent } from './home-page.component';

import {
  GenerateUrlComponent,
  UrlListModule
} from '../../components/index'

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let appCompnent: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomePageComponent,
        GenerateUrlComponent
      ],
      imports: [
        ReactiveFormsModule,
        UrlListModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    appCompnent = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the "Generate Url" component', () => {
    expect(appCompnent.querySelector('app-generate-url')).not.toBeNull();
  });

  it('should contain the "URL List" component', () => {
    expect(appCompnent.querySelector('app-url-list')).not.toBeNull();
  });
});
