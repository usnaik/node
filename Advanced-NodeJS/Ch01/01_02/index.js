var delay = (seconds) => new Promise((resolves, rejects) => {
    setTimeout(() => {
        resolves('the long delay has ended')
    }, seconds*1000);
  });

delay(2)
  .then(console.log)
  .then(() => 42)
  .then((number) => console.log(`Hello world: ${number}`))
  .catch(()=>{});

console.log('end first tick');
