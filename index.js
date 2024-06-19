import { of, filter, map, scan } from 'rxjs';

of(1, 2, 3, 4, 5)
  .pipe(map((item) => item * item))
  .pipe(filter((item) => item % 2 !== 0))
  .subscribe((v) => console.log(`value: ${v}`));

const numbers$ = of(1, 2, 3);

numbers$
  .pipe(
    scan((total, n) => total + n),
    map((sum, index) => sum / (index + 1)),
  )
  .subscribe(console.log);
