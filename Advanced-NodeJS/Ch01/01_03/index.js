var delay = (seconds) => new Promise((resolves, rejects) => {

    if (seconds > 3) {
        rejects(new Error(`${seconds} is too long!`))
    } else {

        setTimeout(() => {
            resolves('the long delay has ended');
        }, seconds*1000);
    }
});

delay(4)
  .then(console.log)
  .then(() => 42)
  .then((number) => console.log(`Hello world: ${number}`))
  .catch((error) => console.log(`error: ${error.message}`));

console.log('end first tick');
