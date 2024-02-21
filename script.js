 for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
               let chessSquare = document.createElement('div');
               chessSquare.className = 'chess-square';
               if ((i + j) % 2 == 0) {
                  chessSquare.style.backgroundColor = '#000';
               }
               chessboard.appendChild(chessSquare);
            }
         }