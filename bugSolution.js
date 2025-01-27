```javascript
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function MyComponent() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    return () => {
      setIsMounted(false);
    };
  }, []);

  const handleClick = () => {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => {
        // Check if the component is still mounted before navigating
        if (isMounted) {
          router.push({ pathname: '/somewhere', query: { data: data.id } });
        }
      });
  };

  return (
    <button onClick={handleClick}>Go somewhere</button>
  );
}

export default MyComponent;```