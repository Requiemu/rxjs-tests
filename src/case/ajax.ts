import * as Rx from 'rxjs';
import { ajax } from 'rxjs/ajax';

ajax('./api/test').subscribe(
    (data) => {console.log(data.response)},
    error => console.error(error)
)