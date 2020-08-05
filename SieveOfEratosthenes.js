let x = 3;
let y = 1000000

processing(x,y)

function processing (min,max) {
  let oddList = [];
  let searchList = [];
  let PrimeNimList = [];
  let stopNum = Math.sqrt(max);

  // 2は奇数の例外のため、min <= 2ならば2をPrimeNimListに入れておく
  if (min <= 2){
    PrimeNimList.push(2);
  }

  // 素数は2以外の奇数が必要条件のため
  // minからmaxまでの奇数をoddListに格納
  for(let i = min; max >= i; i++){
    if((( i % 2 ) != 0)){
      oddList.push(i);
    }
  }

  let n = 0;
  // oddListの先頭の値の倍数を消去＝篩をかけてsearchListに値を渡す
  // oddListの先頭の値をPrimeNimListに入れる
  // oddListの中身を空にし、searchListに値渡しをしてもらう
  // searchListを空にする
  // oddListの先頭の値が、maxの平方根（stopNum）まで繰り返す
  while (n < stopNum){
    let leadNum = (oddList[0])
    oddList.forEach(element => {
      if((element % leadNum) != 0){
        searchList.push(element)
      }
    });
    
    PrimeNimList.push(leadNum)
    oddList = []
    oddList = searchList.slice(0, searchList.length)
    searchList = []

    n = oddList[0]
  }
  
  // ループから抜けたら残りの奇数をPrimeNimListに入れる
  oddList.forEach(element => {
    PrimeNimList.push(element)
  });

  console.log(PrimeNimList);
  console.log(PrimeNimList.length);
}