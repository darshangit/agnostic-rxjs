import { fromEvent, interval, merge, NEVER } from 'rxjs';
import { skipUntil, takeUntil, scan, mapTo, switchMap } from 'rxjs/operators';
import { setCount, startButton, pauseButton } from './utilities';

const start$ = fromEvent(startButton, 'click').pipe(mapTo(true));
const pause$ = fromEvent(pauseButton, 'click').pipe(mapTo(false));

const counter$ = merge(start$, pause$).pipe(
  switchMap((shouldIBRunning) => {
    if (shouldIBRunning) return interval(1000);
    else return NEVER;
  }),
  scan((total) => total + 1, 0),
);

// const counter$ = interval(1000).pipe(
//   skipUntil(start$),
//   scan((total) => total + 1, 1), // to maintain start
//   takeUntil(pause$),
// );

counter$.subscribe(setCount);
