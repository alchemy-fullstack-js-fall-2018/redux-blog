import { FETCH_USERS, USERS_LOAD_START, USERS_LOAD_END, REGISTER_USER } from '../actions/users';
import mockUsers from '../../../testing/fixtures/users.json';

const initialState = {
  list: mockUsers,
  loading: false
};

const newId = state => state.list.sort((a, b) => b.id - a.id)[0].id + 1;

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_USERS:
      return { ...state, list: [...payload] };
    case USERS_LOAD_START:
      return { ...state, loading: true };
    case USERS_LOAD_END:
      return { ...state, loading: false };
    case REGISTER_USER:
      return { ...state, list: [...state.list, { ...payload, id: newId(state) }] };
    default:
      return state;
  }
}
