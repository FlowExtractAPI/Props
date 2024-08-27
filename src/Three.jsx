import Four from "./Four";

// We pass the 'age' property to the component called 'Four'
function Three() {
  return (
    <>
      <h2>From Third</h2>
      <Four age={80} />
    </>
  );
}

export default Three;
