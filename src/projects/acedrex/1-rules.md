---
title: Rules
project: acedrex
layout: 'layouts/project-single.html'
order: 1
---

Grant Acedrex is a 12x12 chess variant with some fairy-chess pieces like Aanca, Unicornio and Giraffe. There are a total of 8 different pieces.

## Pieces:
### Pawn
Grant Acedrex pawns, like in classical chess, can only move forward and capture one 1 forwards-diagonal. Unlike classical chess though, there is no double forward as the first move or there is no enpassent capture. When reaching opposing backrank, instead of promoting to any piece, they promote to the piece that was originally on that square (e.g. a rook pawn will promote to only a rook).

### Rook
Identical to their classical counterparts.

### Lion
Lion can move as a (3,1) or (3,0) leaper.

### Unicornio
One of the most interesting fairy-pieces. At first it leaps like a classical knight (2,1), and then optionally, it can move any number of squares outwards on the diagonal of the leap.

### Giraffe
Giraffe moves as a (3,2) leaper.

### Crocodile
Identical to bishop in classical chess.

### Aanca
This piece's movement is also 2 parts like Unicornio. First, it moves 1 square in any diagonal, and then optionally, it moves any number of squares outwards on the orthogonal.

![Alt text](/projects/acedrex/images/aanca_movement.png)


### King
Moves 1 square in any direction like in classical chess. For it's first move it can also can leap 2 squares on a chosen direction orthogonal or diagonal (but not both i.e. one forward and one left diagonal). There is no castling in Grant-Acedrex.

## Game End
### Winning
A player wins if at least one of the three conditions happen:
#### Checkmate
Checkmate happens if a player's king is under check and there are no legal moves for the player. In this position, player whose king is under check becomes checkmated and loses the game.

#### Stalemate
Stalemate happens if a player's king is NOT under check and there are no legal moves for the player. In this scenario, the player who is stalemated loses. In classical chess, this results in a draw.

#### All Pieces Are Captured
If one of the player's all pieces are captured (except the king as king cannot be captured), that player loses the game.

### Draws
There are no conditions for the draw in the translations but I will implement three-fold repetition for draw calculations. Grant-Acedrex's board is bigger so I suspect forcing a three-fold repetition would be more difficult.
#### Three Fold Repetition

#### Theoretical Draws
