import {configureStore} from '@reduxjs/toolkit';
import todoSilce from '../features/todoSilce';

export default configureStore({
  reducer: {
    todos: todoSilce
  },
});
