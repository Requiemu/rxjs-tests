const { of } = require('rxjs');
const { switchMap, map } = require('rxjs/operators');

// const switched = of(1, 2, 3).pipe(switchMap((x) => of(x, x ** 2, x ** 3)));


const switched = of(1, 2, 3).pipe(switchMap((x) => of('a'+x, 'b'+x, 'c'+x), (x, y) => x + y));

const switchedImprove = of(1, 2, 3).pipe(switchMap((x) => of('a'+x, 'b'+x, 'c'+x).pipe(map(v => x + v))))

switched.subscribe(x =>{
    console.log(`From switchMap with result selector ${x}`);
});

switchedImprove.subscribe(v => {
    console.log(`From switchMap with inner map ${v}`);
})