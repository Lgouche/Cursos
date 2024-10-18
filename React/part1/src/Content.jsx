const Content = ({ arr }) => {
  return (
    <div>
      {arr.map((item) => (
        <p key={item}>
          {item.name} {item.exercises}
        </p>
      ))}
    </div>
  );
}

export default Content;
