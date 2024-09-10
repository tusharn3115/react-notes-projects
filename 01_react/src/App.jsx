import NewFunction from "./new";

function App() {

  // injecting variables in react -----------------------------------------------
  const username = "Tushar";
  return (
    <>
      <NewFunction />
      <h1>React {username}</h1>
      { /* using these curly brackets {} we can inject variable in it 
         this is also called evaluated expression which mean only final output will be given
    */ }
    </>
  );
}

export default App