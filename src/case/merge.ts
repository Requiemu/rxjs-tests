import * as Rx from 'rxjs';
import * as op from 'rxjs/operators';

var observable = Rx.from([
    Rx.of(1, 2, 3),
    Rx.of(4, 5, 6),
    Rx.of(7, 8, 9),
])

observable.pipe(op.merge()).subscribe(
    (value) => {console.log(value)}
)

// flatMap is alias of mergeMap