setTimeout(() => console.log('timeout')) // 3 Web apis => callback queue => call stack

Promise.resolve().then(() => console.log('promise')) // 2 Web apis  => callback queue => call stack (micro-task) - then, catch, finally, await

queueMicrotask(() => console.log('wow'))

Promise.resolve().then(() => console.log('promise_2'))

console.log('code') //1 callback queue => call stack

// Conclusion:

// () => {} macrotsk
// microtasks: then/catch/finally/await
// render
// () => {}
// microtasks: then/catch/finally/await
// render
// () => {}
