# Bidding-game

**The bidding game used in the 2018 Kir-Dev summer camp as an afternoon coding game**

## The base game

The game this project is based on is a simple bidding fight, played by two opposing players.

Each player starts with 100 coins. In each round, both players (secretly) select an amount of coins to give to the other player. Then the coins are swapped, and the player who gave the larger amount gets a point (trophie).

So for example in the first round Alice gives 13 coins and Bob gives 35. The second round will start with Alice having 122 coins and Bob having 78 coins plus a trophie.

The goal of the game is to reach 5 trophies.

## The project

This project is an automated version of the base game, where both players (or teams) have to write an automated algorithm that will play in their place.

## Running

###### Servers (players)

```bash
$ PORT=8001 node server/bin/www
```

###### Client (game)

_Serve the static client folder any way you like_
