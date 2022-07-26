import { from, of } from 'rxjs';

describe('Basic Observables', () => {
  describe(of, () => {
    it('should create an observable from its arguments', () => {
      let result = [];

      const observable$ = of(1, 2, 3, 4);
      observable$.subscribe((value) => result.push(value));
      expect(result).toEqual([1, 2, 3, 4]);
    });
  });

  describe(from, () => {
    it('should create an observable', () => {
      let result = [];
      const observable$ = from([1, 2, 3, 4]);
      observable$.subscribe((value) => result.push(value));
      expect(result).toEqual([1, 2, 3, 4]);
    });
  });
});
