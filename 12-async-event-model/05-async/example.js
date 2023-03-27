// https://www.freecodecamp.org/news/async-await-in-javascript/

async function example() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done!'), 2000);
  });

  let result = await promise; // wait until the promise resolves

  alert(result); // "done!"
}

example();
