

const { visit, the } = cy;

// Feature: Game Card List
// Background:
Given("located on the main page", () => {
  visit("/");
});

// Scenario: Game Card List Display
Then("total {int} game cards should be displayed.", (numberOfGameCards) => {
  the("game-card").should("have.length", numberOfGameCards);
});
And("following 8 card lists should contain main title as:", (table) => {
  const data = table.hashes();
  the("main-title").each((el, index) =>
    expect(el).to.contain(data[index]["main-title"])
  );
});
And("follow 8 cards lists should contain sub title as:", (table) => {
  const data = table.hashes();
  the("sub-title").each((el, index) =>
    expect(el).to.contain(data[index]["sub-title"])
  );
});
