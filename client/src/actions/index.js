import axios from 'axious';
import {FETCH_USER} from './types';

const fetchUser = () => {
    axios.get('/api/current_user');
};
