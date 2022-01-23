(() => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((responce) => {
      if (responce.ok) {
        return responce.json();
      } else {
        throw new Error("");
      }
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error.message);
    })
    .finally(() => {
      console.log("finally");
    });
})();
