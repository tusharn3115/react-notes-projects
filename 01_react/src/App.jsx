import NewFunction from "./new";

function App() {

  // injecting variables in react -----------------------------------------------
  const username = "Tushar";
  return(
    <>
    <NewFunction/>
    <h1>React {username}</h1>  
    { /* using these curly brackets {} we can inject variable in it */ }
    </>
  );
}

export default App