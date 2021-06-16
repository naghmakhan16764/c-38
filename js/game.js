class Game {
  constructor() {}
  getState() {
    db.ref("gameState").on("value", function (data) {
      gameState = data.val();
    });
  }

  update(state) {
    db.ref("/").update({
      gameState: state,
    });
  }

  async start() {
    if (gameState === 0) {
      player = new Player();
      var playerCountRef = await db.ref("playerCount").once("value");
      if (playerCountRef.exists()) {
        playerCount = playerCountRef.val();
        player.getCount();
      }

      form = new Form();
      form.display();
    }
    car1 = createSprite(200, 200);
    car2 = createSprite(400, 200);
    car3 = createSprite(600, 200);
    car4 = createSprite(800, 200);

    cars = [car1, car2, car3, car4];
  }
  play() {
    form.hide();
    text("Game Start", 120, 100);
    Player.getPlayerInfo();
    if (allPlayers !== undefined) {
      var index = 0;
      var x = 0;
      var y = 0;

      for (var plr in allPlayers) {
        index = index + 1;
        x = x + 200;
        y = displayHeight - allPlayers[plr].distance;
        cars[index - 1].x = x;
        cars[index - 1].y = y;
        if (index === player.index) {
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth / 2;
          camera.position.y = y;
        }
        // displayPosition+=20
        // text(allPlayers[plr].name+":"+allPlayers[plr].distance,100,displayPosition)
      }
      drawSprites();
      if (keyIsDown(UP_ARROW) && player.index !== null) {
        player.distance = player.distance + 50;
        player.update();
      }
    }
  }
}
