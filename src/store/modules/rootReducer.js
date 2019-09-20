import { combineReducers } from 'redux';

import books from './books/reducer';
import stock from './stock/reducer';

export default combineReducers({ books, stock });
