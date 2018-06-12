// Functional
export const ident = (t) => t;
export const compose = (f, g) => (x) => f(g(x));
export const partialLeft = (fn, ...args) => (...rest) => fn(...args, ...rest);
export const partialRight = (fn, ...args) => (...rest) => fn(...rest, ...args);

// Object
export const isNull = (x) => x === null;
export const isUndefined = (x) => typeof x === 'undefined';
export const isNullOrUndefined = (x) => isNull(x) || isUndefined(x);
export const defaultWith = (x, fallback) => isNullOrUndefined(x) ? fallback : x;

// Events
export const unwrapEventValue = (e) => e.target ? e.target.value : e;