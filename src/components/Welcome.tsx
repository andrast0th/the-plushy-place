const fetchContent = async () => {
  // Simulate a slow promise
  await new Promise((resolve) => setTimeout(resolve, 5000)); // 3 seconds delay
  return {
    title: "Welcome to The Plushy Place!",
    description: "Your one-stop shop for all things plushy and cozy.",
  };
};

const Welcome = async () => {
  const content = await fetchContent();

  return (
    <div>
      <h1>{content.title}</h1>
      <p>{content.description}</p>
    </div>
  );
};

export default Welcome;
