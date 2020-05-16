import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AmountFormatPipe } from './pipes/amount-format.pipe';
import { MatCardModule, MatDialogModule } from '@angular/material';
import { Loan } from './models/loan.model';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

const initialState: Array<Loan> = [
  {
    "id": "1",
    "title": "Voluptate et sed tempora qui quisquam.",
    "tranche": "A",
    "available": "11,959",
    "annualised_return": "8.60",
    "term_remaining": "864000",
    "ltv": "48.80",
    "amount": "85754"
  },
  {
    "id": "5",
    "title": "Consectetur ipsam qui magnam minus dolore ut fugit.",
    "tranche": "B",
    "available": "31,405",
    "annualised_return": "7.10",
    "term_remaining": "16200000",
    "ltv": "48.80",
    "amount": "85754"
  },
  {
    "id": "12",
    "title": "Dolores repudiandae ut voluptas unde laborum quaerat et sapiente.",
    "tranche": "C",
    "available": "12,359",
    "annualised_return": "4.80",
    "term_remaining": "879000",
    "ltv": "48.80",
    "amount": "85754"
  }
];

describe('AppComponent', () => {
  let store: MockStore;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatDialogModule
      ],
      declarations: [
        AppComponent,
        AmountFormatPipe
      ],
      providers: [
        provideMockStore({ initialState })
      ]
    }).compileComponents();
    store = TestBed.get(MockStore);
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('#getObservableStoreValue should return value from observable',
    (done: DoneFn) => {
      store.setState(initialState);
      store.select(store => store).subscribe(value => {
        expect(value).toBe(initialState);
        done();
      });
    });

});
