// CHESSBOARD
(function genChessBoard(){
   let str = '',size = 8;
    for(let i = 0;i<size;i++){
        for(let j=0;j<size;j++){
            if((i + j)%2 !== 0){
               str += '#';
            }else{
               str += ' ';
            }
       }
       str +='\n';
    }
    console.log(str);
})();