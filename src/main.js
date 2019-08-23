import { search } from './components/searchApi';

const pro = search();
pro.then( res => console.log(res));
