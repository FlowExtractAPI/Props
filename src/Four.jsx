// Notice we use a made-up parameter name 'props' below that represents all the properties passed to this component.You can name 'props' as anything you like
function Four(props) {
  console.log(props);

  // We can now use the 'age' property passed to this component from the component called 'Three'
  return (
    <>
      <p>{props.age}</p>
    </>
  );
}

export default Four;
