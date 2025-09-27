function TestName() {
  return (
    <>
      <h1>This is Omar App</h1>
    </>
  );
}

function App() {
  return (
    <>
      <TestName />
      <h1>Welcome To MY Second App</h1>
      <h1>{TestName()}</h1>
    </>
  );
}
export default App;
