class Player {
  constructor() {
    this.index = null;
    this.distance = 0;
    this.name = null;
  }

  updateCount(playerCount) {
    db.ref("/").update({
      playerCount: playerCount,
    });
  }

  getCount() {
    db.ref("playerCount").on("value", function (data) {
      playerCount = data.val();
    });
  }

  update() {
    var playerIndex = "players/player" + player.index;
    db.ref(playerIndex).set({
      name: this.name,
      distance: this.distance,
    });
  }

  static getPlayerInfo() {
    db.ref("players").on("value", (data) => {
      allPlayers = data.val();
    });
  }
}
