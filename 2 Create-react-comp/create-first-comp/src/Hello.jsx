function Hello(){

  let name = "Shaon";
  
  let fullName = () => {
    return name + " Khan";
  }
  return <h3>
    Hello this the future specking.I am {fullName()}
  </h3>
}

export default Hello;