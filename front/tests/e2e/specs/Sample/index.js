const { the, visit } = cy;

Given("on the main page", () => {
  visit('/');
});
Then("sample displays {string}", (str) => {
  the('sample').contains(str);
});
