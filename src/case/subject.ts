import * as Rx from 'rxjs';

var src$ = Rx.interval(1000);

var subject$ = new Rx.Subject();

src$.subscribe(subject$);

subject$.subscribe((value) => { console.log(value)});

subject$.next(`from subject ${1}`);
subject$.next(`from subject ${2}`);