function Counter() {
  const [count, setCount] = React.useState(0);

  const increment = React.useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <Child onClick={increment} />
  );
}