import { of, from, interval, fromEvent, merge, NEVER } from 'rxjs';
import { pluck, concatMap, take, map } from 'rxjs/operators';

import {
  getCharacter,
  render,
  startButton,
  pauseButton,
  setStatus,
} from './utilities';

// const character$ = from(getCharacter(1)).pipe(pluck('name'));

//get 4 characters - mergemap - fired in parallel
const character$ = of(1, 2, 3, 4).pipe(mergeMap((n) => from(getCharacter(n))));
character$.subscribe(render);
