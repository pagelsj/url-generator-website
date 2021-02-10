import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

import { UrlListComponent } from './url-list.component';

describe('UrlListComponent', () => {
  let component: UrlListComponent;
  let fixture: ComponentFixture<UrlListComponent>;
  let headerElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ UrlListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    headerElement = fixture.debugElement.query(By.css('header')).nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('@Input: viewAllLink', () => {

    // DEFAULT BEHAVIOUR
    it('should hide the view more link by default', () => {
      var viewMoreLink = fixture.debugElement.query(By.css('.view-more'));
      expect(viewMoreLink).toBeNull();
    });
    it('should default the title to "All URLs" if not set', () => {
      expect(headerElement.textContent).toEqual("All URLs");
    });

    // IF SET TO TUE
    it('should show the view more link if set true', () => {
      component.viewAllLink = true;
      fixture.detectChanges();

      var viewMoreLink = fixture.debugElement.query(By.css('.view-more'));
      expect(viewMoreLink).not.toBeNull();
    });
    it('should change the title to contain "Example URLs" set to true', () => {
      component.viewAllLink = true;
      component.setTitle();
      var titleText = fixture.debugElement.query(By.css('header')).nativeElement;

      fixture.detectChanges();

      expect(headerElement.textContent).toEqual("Example URLs");
    });
  });
});
