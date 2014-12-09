var julekalender = julekalender || {};

julekalender.luke3 = (function () {
	var TILES_PER_LINE = 10;

	return {
		init : function () {
			this.board = this.createBoard();
			this.piece = {
				x : 0,
				y : 0
			};
		},
		createBoard : function () {
			var i, j, board = [], row ;
			
			for(i = 0; i < TILES_PER_LINE; i++) {
				row = [];
				for(j = 0; j < TILES_PER_LINE; j++) {
					row.push({
						color : "white"
					});
				}
				board.push(row);
			}

			return board;
		},
		movePiece : function () {
			var curX = this.piece.x,
				curY = this.piece.y,
				legalMoves = this.getLegalMoves(curX, curY, true),
				lowestScoreIsBest = true,
				newMove;
			
			if(legalMoves.length < 1) {
				legalMoves = this.getLegalMoves(curX, curY, false);
				lowestScoreIsBest = false;
			}

			this.piece = this.getBestMove(legalMoves, lowestScoreIsBest);
			this.toggleColor(curX, curY);
		},
		toggleColor : function (x, y) {
			var color = this.board[x][y].color,
				newColor = color === "white" ? "black" : "white";
			this.board[x][y].color = newColor;
		},
		getLegalMoves : function (curX, curY, sameColor) {
			var i, j, moves = [], newX, newY;

			for(i = 1; i < 3; i++) {
				if(curX - i > -1) {
					newX = curX - i;
					if(curY - (3 - i) > -1) {
						newY = curY - (3 - i);
						if(sameColor == this.isSameColor(curX, curY, newX, newY)) {
							moves.push({
								x : newX,
								y : newY
							});
						}
					}

					if(curY + (3 - i) < TILES_PER_LINE) {
						newY = curY + (3 - i);
						if(sameColor == this.isSameColor(curX, curY, newX, newY)) {
							moves.push({
								x : newX,
								y : newY
							});
						}
					}
				}

				if(curX + i < TILES_PER_LINE) {
					newX = curX + i;
					if(curY - (3 - i) > -1) {
						newY = curY - (3 - i);
						if(sameColor == this.isSameColor(curX, curY, newX, newY)) {
							moves.push({
								x : newX,
								y : newY
							});
						}
					}

					if(curY + (3 - i) < TILES_PER_LINE) {
						newY = curY + (3 - i);
						if(sameColor == this.isSameColor(curX, curY, newX, newY)) {
							moves.push({
								x : newX,
								y : newY
							});
						}
					}
				}
			}

			return moves;
		},
		isSameColor : function (x1, y1, x2, y2) {
			return this.board[x1][y1].color === this.board[x2][y2].color;
		},
		getBestMove : function (legalMoves, lowestScoreIsBest) {
			var current = legalMoves[0],
				currentScore,
				suggestedScore,
				i = 1;

			for(; i < legalMoves.length; i++) {
				currentScore = current.x * 10 + current.y;
				suggestedScore = legalMoves[i].x * 10 + legalMoves[i].y;
				if(lowestScoreIsBest && suggestedScore < currentScore) {
					current = legalMoves[i];
				}
				else if (!lowestScoreIsBest && suggestedScore > currentScore) {
					current = legalMoves[i];
				}
			}
			return current;
		}
	};
}());
