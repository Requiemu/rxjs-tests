import * as Rx from 'rxjs';
import * as op from 'rxjs/operators';

var observable$ = Rx.range(1, 5);

observable$.pipe(op.map(v => 2*v)).subscribe((value) => console.log(value))