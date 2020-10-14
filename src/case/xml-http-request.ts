import * as Rx from 'rxjs';

function get(url) {
    return new Rx.Observable(function(subscriber) {
        const req = new XMLHttpRequest();
        req.open('GET', url);

        req.onload = () => {
            if (req.status === 200) {
                subscriber.next(req.response);
                subscriber.complete();
            } else {
                subscriber.error(new Error(req.statusText));
            }
        }

        req.onerror = () => {
            subscriber.error(new Error(req.statusText));
        }

        req.send();
    })
}

get('./api/test').subscribe((value: string) => {
    console.log('get api/test: ', value, typeof value, JSON.parse(value), typeof JSON.parse(value));
})