import * as Rx from 'rxjs';

function get(url) {
    return new Rx.Observable(function (subscriber) {
        fetch(url).then((res) => {
            if (res.status === 200) {
                res.text().then((value) => {
                    subscriber.next(value);
                    subscriber.complete();
                })
            } else {
                subscriber.error(res.statusText);
            }
        })
    })
}

get('./api/test').subscribe((value: string) => {
    console.log('get api/test: ', value);
})