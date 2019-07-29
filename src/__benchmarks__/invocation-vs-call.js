const ITERATIONS = 100;
const PROTO_PUSH = Array.prototype.push;

describe('incovation vs call', () => {
    benchmark('invocation', () => {
        let arr;
        before(() => {
            arr = [];
        });
        run(() => {
            for (let i = 0; i < ITERATIONS; i++) {
                arr.push(i * 2);
            }
        });
    });

    benchmark('invocation', () => {
        let arr;
        before(() => {
            arr = [];
        });
        run(() => {
            for (let i = 0; i < ITERATIONS; i++) {
                PROTO_PUSH.call(arr, i);
            }
        });
    });
});