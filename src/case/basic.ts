import * as Rx from 'rxjs';

console.log(Rx)

var observable = new Rx.Observable(function(observer) {
    console.log(observer)
    observer.next(1);
    observer.next(2);
    observer.complete();
})

observable.subscribe((value) => {console.log(value)})