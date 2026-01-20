import { initialUser, type UserType } from './UserApp2';

// set 작업 : action 선언

// SET_NAME : 이름 소문자로 변경
// SET_YEAR : YEAR
// RESET : RESET
//

type UserAction =
  | {
      type: 'SET_NAME';
      name: string;
    }
  | {
      type: 'SET_YEAR';
      year: number;
    }
  | {
      type: 'RESET';
    };

export function userReducer(user: UserType, action: UserAction) {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...user,
        name: action.name.trim().toLowerCase(),
      };
    case 'SET_YEAR':
      const age = new Date().getFullYear() - action.year;
      if (age < 18) {
        return {
          ...user,
          year: action.year,
          warning: ' 18세미만 입니다.',
        };
      } else {
        return {
          ...user,
          year: action.year,
          warning: '',
        };
      }
    case 'RESET':
      return initialUser;

    default:
      throw new Error('Unknown action type');
  }
}
