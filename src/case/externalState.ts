import * as Rx from 'rxjs';
import * as op from 'rxjs/operators';

var externalState = 0;
var interval$ = Rx.interval(1000);

var increment$ = interval$.pipe(
    op.map((v) => {
        externalState += 1;
        return v
    }),
    op.take(5)
)

increment$.subscribe((v) => {
    console.log(`From subscriber1: ${externalState}`);
})

increment$.subscribe((v) => {
    console.log(`From subscriber2: ${externalState}`);
})

// ======== improve =========
console.log('======== improve =========');
var incrementWithReduce$ = interval$.pipe(
    op.scan((acc, value) => {
        return acc + 1
    }, 0),
    op.take(5)
);

incrementWithReduce$.subscribe((v) => {
    console.log(`From subscriber3: ${v}`);
});

incrementWithReduce$.subscribe((v) => {
    console.log(`From subscriber4: ${v}`);
});