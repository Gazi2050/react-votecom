# react-votecom
A React component package for implementing voting and commenting functionality in web applications.

## Installation
You can install react-votecom using npm:

```bash
npm install react-votecom
```

## Introduction
React-votecom is a package that provides easy-to-use components for adding voting and commenting features to your React applications. It simplifies the process of managing voting statistics and integrates seamlessly with your React projects.

## Package Overview
The react-votecom package includes several functions and interfaces to manage voting statistics and perform voting operations.

### Functions
- `separateVotingFunction`: Increments either the upvotes or downvotes count in the voting stats object.
- `combinedVotingFunction`: Updates the combined vote count and calculates the percentages of upvotes and downvotes.

### Interfaces
- `VotingStats`: Represents the voting statistics, including the number of upvotes and downvotes.
- `VotingResult`: Represents the result of a voting operation, including the combined vote count and the percentages of upvotes and downvotes.

## Usage

### Using with JavaScript or TypeScript
#### With API
### Usage with TypeScript (TS)
###### ts
```typescript
import { separateVotingFunction, combinedVotingFunction } from 'react-votecom';

// Example usage of separateVotingFunction
const initialVotingStats: VotingStats = { upvotes: 0, downvotes: 0 };
const updatedStats = separateVotingFunction(initialVotingStats, 'upvote');
console.log(updatedStats);

// Example usage of combinedVotingFunction
const initialVotingStats2: VotingStats = { upvotes: 0, downvotes: 0 };
const voteResult = combinedVotingFunction(initialVotingStats2, 'upvote');
console.log(voteResult);
```

### Example with API or Database Link
###### js
```javascript
// Example usage with API
fetch('https://api.example.com/voting/stats')
  .then(response => response.json())
  .then(data => {
    // Assuming the API response is in the format { upvotes: number, downvotes: number }
    const initialVotingStats = data;
    const updatedStats = separateVotingFunction(initialVotingStats, 'upvote');
    console.log(updatedStats);

    const voteResult = combinedVotingFunction(initialVotingStats, 'upvote');
    console.log(voteResult);
  })
  .catch(error => console.error('Error fetching voting stats:', error));

// Example usage with Database Link
// Assuming you have a database link and method to retrieve voting stats
const initialVotingStats = getVotingStatsFromDatabase();
const updatedStats = separateVotingFunction(initialVotingStats, 'upvote');
console.log(updatedStats);

const voteResult = combinedVotingFunction(initialVotingStats, 'upvote');
console.log(voteResult);
```
These examples demonstrate separate usage for JavaScript and TypeScript, along with how you can integrate the voting functions with an API or retrieve data from a database. Adjust the API endpoint or database retrieval method according to your actual implementation.

### Using with React
#### With API
Here's how you can use the react-votecom package with React in both JavaScript (JSX) and TypeScript (TSX) separately, along with examples that fetch data from an API:

### React JSX Example with API
###### jsx
```jsx
import React, { useEffect, useState } from 'react';
import { separateVotingFunction, combinedVotingFunction } from 'react-votecom';

const VotingComponent = () => {
  const [votingStats, setVotingStats] = useState({ upvotes: 0, downvotes: 0 });

  useEffect(() => {
    fetch('https://api.example.com/voting/stats')
      .then(response => response.json())
      .then(data => setVotingStats(data))
      .catch(error => console.error('Error fetching voting stats:', error));
  }, []);

  const handleUpvote = () => {
    const updatedStats = separateVotingFunction(votingStats, 'upvote');
    setVotingStats(updatedStats);
  };

  const handleDownvote = () => {
    const updatedStats = separateVotingFunction(votingStats, 'downvote');
    setVotingStats(updatedStats);
  };

  return (
    <div>
      <h2>Voting Stats</h2>
      <p>Upvotes: {votingStats.upvotes}</p>
      <p>Downvotes: {votingStats.downvotes}</p>
      <button onClick={handleUpvote}>Upvote</button>
      <button onClick={handleDownvote}>Downvote</button>
    </div>
  );
};

export default VotingComponent;
```

### React TSX Example with API
###### tsx
```tsx
import React, { useEffect, useState } from 'react';
import { separateVotingFunction, combinedVotingFunction, VotingStats } from 'react-votecom';

const VotingComponent: React.FC = () => {
  const [votingStats, setVotingStats] = useState<VotingStats>({ upvotes: 0, downvotes: 0 });

  useEffect(() => {
    fetch('https://api.example.com/voting/stats')
      .then(response => response.json())
      .then(data => setVotingStats(data))
      .catch(error => console.error('Error fetching voting stats:', error));
  }, []);

  const handleUpvote = () => {
    const updatedStats = separateVotingFunction(votingStats, 'upvote');
    setVotingStats(updatedStats);
  };

  const handleDownvote = () => {
    const updatedStats = separateVotingFunction(votingStats, 'downvote');
    setVotingStats(updatedStats);
  };

  const handleCombinedVoting = () => {
    const updatedStats = combinedVotingFunction(votingStats, 'upvote');
    setVotingStats(updatedStats);
  };

  return (
    <div>
      <h2>Voting Stats</h2>
      <p>Upvotes: {votingStats.upvotes}</p>
      <p>Downvotes: {votingStats.downvotes}</p>
      <button onClick={handleUpvote}>Upvote</button>
      <button onClick={handleDownvote}>Downvote</button>
      <button onClick={handleCombinedVoting}>Combined Voting</button>
    </div>
  );
};

export default VotingComponent;

```

These examples demonstrate how to use the react-votecom package with React in both JavaScript (JSX) and TypeScript (TSX) and fetch data from an API. Adjust the API endpoint according to your actual implementation. Let me know if you need further clarification!

## License
This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Contributing
If you're interested in contributing to the react-votecom project, feel free to fork the repository and submit pull requests with your enhancements or bug fixes. We welcome contributions from the community!