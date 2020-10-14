import * as Rx from 'rxjs';

Rx.fromEvent(document, 'mousemove').subscribe(
    (e: MouseEvent) => {console.log(e.clientX)}
)