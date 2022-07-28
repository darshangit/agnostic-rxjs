import { fromEvent, interval, merge, NEVER } from 'rxjs';
import { skipUntil, takeUntil } from 'rxjs/operators';
import { setCount, startButton, pauseButton } from './utilities';

const start$ = fromEvent(startButton, 'click');
const pause$ = fromEvent(pauseButton, 'click');

const counter$ = interval(1000).pipe(
  skipUntil(start$),
  scan((total) => total + 1, 1), // to maintain start
  takeUntil(pause$),
);

counter$.subscribe(setCount);
