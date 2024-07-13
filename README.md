# react-votecom
A React component package for implementing voting functionality in web applications.

## Installation
Install `react-votecom` using npm:

```bash
npm install react-votecom
```

## Introduction
`react-votecom` is a package that provides easy-to-use functions for adding voting features to your React applications. It simplifies managing voting statistics and integrates seamlessly with your projects.

## Demo
Check out the [demo](https://react-votecom-demo1.surge.sh).

## Package Overview
The `react-votecom` package includes several functions and interfaces to manage voting statistics and perform voting operations.

### Functions
- **`separateVotingFunction`**: Increments either the upvotes or downvotes count in the voting stats object.
- **`combinedVotingFunction`**: Updates the combined vote count and calculates the percentages of upvotes and downvotes.

### Interfaces
- **`VotingStats`**: Represents the voting statistics, including the number of upvotes and downvotes.
- **`VotingResult`**: Represents the result of a voting operation, including the combined vote count and the percentages of upvotes and downvotes.

## Usage
### Voting Functions with React
Here’s how you can use the `react-votecom` package with React in JavaScript (JSX).

### Combined Voting
#### jsx
```jsx
import { useEffect, useState } from 'react';
import { combinedVotingFunction } from 'react-votecom';

function App() {
  const [votingStats, setVotingStats] = useState({ upvotes: 0, downvotes: 0, count: 0, upvotePercentage: 0, downvotePercentage: 0 });

  useEffect(() => {
    const storedVotingStats = localStorage.getItem('votingStats');
    if (storedVotingStats) {
      setVotingStats(JSON.parse(storedVotingStats));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('votingStats', JSON.stringify(votingStats));
  }, [votingStats]);

  const handleCombinedVoting = (voteType) => {
    const updatedStats = combinedVotingFunction(votingStats, voteType);
    setVotingStats(updatedStats);
    console.log(updatedStats);
  };

  return (
    <div>
      <h1>Hello react-votecom</h1>
      <p>CombinedVoting</p>
      <button onClick={() => handleCombinedVoting('upvote')}>UpVote</button>
      <button onClick={() => handleCombinedVoting('downvote')}>DownVote</button>
      {/* Total Vote Count */}
      <p>{votingStats.count || 0}</p>
      <div>
        {/* UpVote Percentage */}
        <span>{votingStats.upvotePercentage || 0}%</span>
        {/* DownVote Percentage */}
        <span>{votingStats.downvotePercentage || 0}%</span>
      </div>
    </div>
  );
}

export default App;
```

### Separate Voting
#### jsx
```jsx
import { useEffect, useState } from 'react';
import { separateVotingFunction } from 'react-votecom';

function App() {
  const [votingStats, setVotingStats] = useState({ upvotes: 0, downvotes: 0 });

  useEffect(() => {
    const storedVotingStats = localStorage.getItem('votingStats');
    if (storedVotingStats) {
      setVotingStats(JSON.parse(storedVotingStats));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('votingStats', JSON.stringify(votingStats));
  }, [votingStats]);

  const handleUpvote = () => {
    const updatedStats = separateVotingFunction(votingStats, 'upvote');
    setVotingStats(updatedStats);
    console.log(updatedStats);
  };

  const handleDownvote = () => {
    const updatedStats = separateVotingFunction(votingStats, 'downvote');
    setVotingStats(updatedStats);
    console.log(updatedStats);
  };

  return (
    <div>
      <h1>Hello react-votecom</h1>
      <p>SeparateVoting</p>
      <button onClick={handleUpvote}>UpVote</button>
      <button onClick={handleDownvote}>DownVote</button>
      <div>
        {/* Up Vote Count */}
        <span>{votingStats.upvotes}</span>
        {/* Down Vote Count */}
        <span>{votingStats.downvotes}</span>
      </div>
    </div>
  );
}

export default App;
```

These examples demonstrate how to use the `react-votecom` package with React in JavaScript (JSX).

## License
This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Contributing
We welcome contributions to the `react-votecom` project! Here's how you can get started:

1. **Fork the Repository**: Fork the `react-votecom` repository to your own GitHub account.

2. **Clone the Repository**: Clone the repository to your local machine using:

   ```bash
   git clone https://github.com/your-username/react-votecom.git
   ```

3. **Create a New Branch**: Create a new branch for your contributions using a descriptive name:

   ```bash
   git checkout -b feature/new-feature
   ```

4. **Make Changes**: Make your desired changes to the codebase. Ensure that your changes adhere to the coding standards and guidelines of the project.

5. **Test Your Changes**: Test your changes thoroughly to ensure they work as expected and do not introduce any regressions.

6. **Commit Your Changes**: Once you're satisfied with your changes, commit them to your branch with descriptive commit messages:

   ```bash
   git commit -m "Add new feature: Description of the feature"
   ```

7. **Push Changes**: Push your changes to your forked repository:

   ```bash
   git push origin feature/new-feature
   ```

8. **Submit a Pull Request**: Submit a pull request from your branch to the main repository's `main` branch. Provide a detailed description of your changes and any related issues or pull requests.
  
  ### We appreciate your contributions to making `react-votecom` even better!