import { Loan } from '../../models/loan.model';
import { LoanActions, LoanActionTypes } from '../actions/loan.actions';

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
    "term_remaining": "1620000",
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

export function LoanReducer(state: Array<Loan> = initialState, action: LoanActions) {
  switch (action.type) {
    case LoanActionTypes.LOAN_INVEST:
      let index = state.map(item => item.id).indexOf(action.payload.id);
      return [
        ...state.slice(0, index),
        Object.assign({}, state[index], action.payload),
        ...state.slice(index + 1)
      ];
    default:
      return state;
  }
}
