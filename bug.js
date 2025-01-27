```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    // This will cause an error if the user navigates away from the page before the promise resolves
    fetch('/api/data')
      .then(response => response.json())
      .then(data => {
        router.push({ pathname: '/somewhere', query: { data: data.id } });
      });
  };

  return (
    <button onClick={handleClick}>Go somewhere</button>
  );
}

export default MyComponent;```