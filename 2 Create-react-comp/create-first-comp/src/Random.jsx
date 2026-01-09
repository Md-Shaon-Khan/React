function Random(){
  let number = Math.floor(Math.random() * 100) + 1;

  return <h1 style={{'background-color': "#b1d5f1ff"}}>Random Number is : {number}</h1>
}

export default Random;