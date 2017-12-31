function truthCheck(collection, pre) {
  for (let userElement of collection) {
    if (Boolean(userElement[pre]) === false) {
      return false;
    }
  }
  return true;
}

truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" }
  ],
  "sex"
);
