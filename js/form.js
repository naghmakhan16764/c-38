class Form {
  constructor() {
    this.input = createInput("name");
    this.button = createButton("Join now");
    this.greeting = createElement("h2");
  }
  hide() {
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
  }
  display() {
    var title = createElement("h1");
    title.html("car racing game ");
    title.position(100, 10);

    this.input.position(150, 100);

    this.button.position(300, 250);
    this.button.mousePressed(() => {
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount = playerCount + 1;
      player.index = playerCount;
      player.update(player.name);
      player.updateCount(playerCount);

      this.greeting.html("Welcome" + player.name);
      this.greeting.position(100, 100);
    });
  }
}
