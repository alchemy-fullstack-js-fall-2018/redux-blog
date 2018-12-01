import { FETCH_USERS, USERS_LOAD_START, USERS_LOAD_END } from '../actions/users';

const initialState = {
  list: [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv'
    }
  ],
  loading: false
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_USERS:
      return { ...state, list: [...payload] };
    case USERS_LOAD_START:
      return { ...state, loading: true };
    case USERS_LOAD_END:
      return { ...state, loading: false };
  }
}
