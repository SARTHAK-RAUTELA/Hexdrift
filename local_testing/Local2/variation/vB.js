import('https://v2.crocdn.com/_tampermonkey/convert.user.js').then(() => dispatchEvent(new Event('analyze')));

console.log("Heloo");