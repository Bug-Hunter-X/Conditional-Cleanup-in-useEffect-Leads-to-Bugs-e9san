```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Always run cleanup
    return () => {
      console.log('cleanup');
      // ... cleanup logic ...
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```