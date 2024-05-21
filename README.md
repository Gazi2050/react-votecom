# react-votecom
A React component package for implementing voting  functionality in web applications.

## Installation
You can install react-votecom using npm:

```bash
npm install react-votecom
```

## Introduction
React-votecom is a package that provides easy-to-use components for adding voting features to your Ts,Js,React applications. It simplifies the process of managing voting statistics and integrates seamlessly with your projects.

## Demo
[Demo1](https://react-votecom-demo1.surge.sh)

## Package Overview
The react-votecom package includes several functions and interfaces to manage voting statistics, perform voting operations.

### Functions
- `separateVotingFunction`: Increments either the upvotes or downvotes count in the voting stats object.
- `combinedVotingFunction`: Updates the combined vote count and calculates the percentages of upvotes and downvotes.

### Interfaces
- `VotingStats`: Represents the voting statistics, including the number of upvotes and downvotes.
- `VotingResult`: Represents the result of a voting operation, including the combined vote count and the percentages of upvotes and downvotes.

## Usage

### Voting Function
### Using with JavaScript or TypeScript With API
#### Usage with JavaScript (JS)
###### js
```javascript
function App() {
  const [votingStats, setVotingStats] = React.useState({ upvotes: 0, downvotes: 0 });
  const [votingStats2, setVotingStats2] = React.useState({ upvotes: 0, downvotes: 0 });

  React.useEffect(() => {
    fetchVotingStats(); // Fetch initial voting stats from the API
  }, []);

  const fetchVotingStats = async () => {
    try {
      const response = await fetch('/api/voting/stats');
      const data = await response.json();
      setVotingStats(data.stats1);
      setVotingStats2(data.stats2);
    } catch (error) {
      console.error('Error fetching voting stats:', error);
    }
  };

  const updateVotingStats = async (stats, type) => {
    try {
      const response = await fetch(`/api/voting/${type}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(stats)
      });
      const data = await response.json();
      if (type === 'combined') {
        setVotingStats(data.stats);
      } else if (type === 'separate') {
        setVotingStats2(data.stats);
      }
    } catch (error) {
      console.error('Error updating voting stats:', error);
    }
  };

  const handleCombinedVoting = async (voteType) => {
    const updatedStats = combinedVotingFunction(votingStats, voteType);
    await updateVotingStats(updatedStats, 'combined');
  };

  const handleSeparateVoting = async (voteType) => {
    const updatedStats = separateVotingFunction(votingStats2, voteType);
    await updateVotingStats(updatedStats, 'separate');
  };

  return (
    React.createElement('div', { className: "flex justify-center items-center mt-1" },
      React.createElement('div', { className: "card w-auto bg-zinc-900 text-neutral-content" },
        React.createElement('div', { className: "card-body items-center text-center" },
          React.createElement('h1', { className: "text-center text-3xl font-bold" }, "Hello react-votecom"),
          React.createElement('h2', { className: "card-title" }, "Post"),
          React.createElement('p', null, "We are using post for test npm package"),
          React.createElement('p', { className: "font-bold text-purple-400" }, "CombinedVoting"),
          React.createElement('div', { className: "card-actions justify-center" },
            React.createElement('button', { onClick: () => handleCombinedVoting('upvote'), className: "btn bg-black text-2xl text-green-600" },UpVote),
            React.createElement('button', { onClick: () => handleCombinedVoting('downvote'), className: "btn bg-black text-2xl text-red-600" }, DownVote)
          ),
          React.createElement('div', { className: "font-bold text-lg" },
            React.createElement('p', { className: "text-purple-400" }, votingStats.count ? votingStats.count : 0),
            React.createElement('div', { className: "space-x-3" },
              React.createElement('span', { className: "text-green-600" }, votingStats.upvotePercentage ? votingStats.upvotePercentage : 0),
              React.createElement('span', { className: "text-red-600" }, votingStats.downvotePercentage ? votingStats.downvotePercentage : 0)
            )
          ),
          React.createElement('p', { className: "font-bold text-purple-400" }, "SeparateVoting"),
          React.createElement('div', { className: "card-actions justify-end" },
            React.createElement('button', { onClick: () => handleSeparateVoting('upvote'), className: "btn bg-black text-2xl text-green-600" }, UpVote),
            React.createElement('button', { onClick: () => handleSeparateVoting('downvote'), className: "btn bg-black text-2xl text-red-600" }, DownVote)
          ),
          React.createElement('div', { className: "space-x-3 text-lg font-bold" },
            React.createElement('span', { className: "text-green-600" }, votingStats2.upvotes ? votingStats2.upvotes : 0),
            React.createElement('span', { className: "text-red-600" }, votingStats2.downvotes ? votingStats2.downvotes : 0)
          )
        )
      )
    )
  );
}

export default App;
```
#### Usage with TypeScript (TS)
###### ts
```typescript
import React, { useEffect, useState } from 'react';
interface VotingStats {
  upvotes: number;
  downvotes: number;
}

function App(): JSX.Element {
  const [votingStats, setVotingStats] = useState<VotingStats>({ upvotes: 0, downvotes: 0 });
  const [votingStats2, setVotingStats2] = useState<VotingStats>({ upvotes: 0, downvotes: 0 });

  useEffect(() => {
    fetchVotingStats(); // Fetch initial voting stats from the API
  }, []);

  const fetchVotingStats = async (): Promise<void> => {
    try {
      const response = await fetch('/api/voting/stats');
      const data = await response.json();
      setVotingStats(data.stats1);
      setVotingStats2(data.stats2);
    } catch (error) {
      console.error('Error fetching voting stats:', error);
    }
  };

  const updateVotingStats = async (stats: VotingStats, type: string): Promise<void> => {
    try {
      const response = await fetch(`/api/voting/${type}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(stats)
      });
      const data = await response.json();
      if (type === 'combined') {
        setVotingStats(data.stats);
      } else if (type === 'separate') {
        setVotingStats2(data.stats);
      }
    } catch (error) {
      console.error('Error updating voting stats:', error);
    }
  };

  const handleCombinedVoting = async (voteType: string): Promise<void> => {
    const updatedStats = combinedVotingFunction(votingStats, voteType);
    await updateVotingStats(updatedStats, 'combined');
  };

  const handleSeparateVoting = async (voteType: string): Promise<void> => {
    const updatedStats = separateVotingFunction(votingStats2, voteType);
    await updateVotingStats(updatedStats, 'separate');
  };

  return (
    <div className="flex justify-center items-center mt-1">
      <div className="card w-auto bg-zinc-900 text-neutral-content">
        <div className="card-body items-center text-center">
          <h1 className="text-center text-3xl font-bold">Hello react-votecom</h1>
          <h2 className="card-title">Post</h2>
          <p>We are using post for test npm package</p>
          <p className="font-bold text-purple-400">CombinedVoting</p>
          <div className="card-actions justify-center">
            <button onClick={() => handleCombinedVoting('upvote')} className="btn bg-black text-2xl text-green-600">UpVote</button>
            <button onClick={() => handleCombinedVoting('downvote')} className="btn bg-black text-2xl text-red-600">DownVote</button>
          </div>
          <div className="font-bold text-lg">
            <p className="text-purple-400">{votingStats.count ? votingStats.count : 0}</p>
            <div className="space-x-3 ">
              <span className="text-green-600">{votingStats.upvotePercentage ? votingStats.upvotePercentage : 0}%</span>
              <span className="text-red-600">{votingStats.downvotePercentage ? votingStats.downvotePercentage : 0}%</span>
            </div>
          </div>

          <p className="font-bold text-purple-400">SeparateVoting</p>
          <div className="card-actions justify-end">
            <button onClick={() => handleSeparateVoting('upvote')} className="btn bg-black text-2xl text-green-600">UpVote</button>
            <button onClick={() => handleSeparateVoting('downvote')} className="btn bg-black text-2xl text-red-600">DownVote</button>
          </div>
          <div className="space-x-3 text-lg  font-bold">
            <span className="text-green-600">{votingStats2.upvotes ? votingStats2.upvotes : 0}</span>
            <span className="text-red-600">{votingStats2.downvotes ? votingStats2.downvotes : 0}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

```

These examples demonstrate separate usage for JavaScript and TypeScript, along with how you can integrate the voting functions with an API or retrieve data from a database. Adjust the API endpoint or database retrieval method according to your actual implementation.

### Using Voting function with React With API
Here's how you can use the react-votecom package with React in both JavaScript (JSX) and TypeScript (TSX) separately, along with examples that fetch data from an API:

#### React JSX Example with API
###### jsx
```jsx
import { useEffect, useState } from 'react';
import { combinedVotingFunction, separateVotingFunction } from "react-votecom";

function App() {
  const [votingStats, setVotingStats] = useState({ upvotes: 0, downvotes: 0 });
  const [votingStats2, setVotingStats2] = useState({ upvotes: 0, downvotes: 0 });

  useEffect(() => {
    fetchVotingStats(); // Fetch initial voting stats from the API
  }, []);

  const fetchVotingStats = async () => {
    try {
      const response = await fetch('/api/voting/stats');
      const data = await response.json();
      setVotingStats(data.stats1);
      setVotingStats2(data.stats2);
    } catch (error) {
      console.error('Error fetching voting stats:', error);
    }
  };

  const updateVotingStats = async (stats, type) => {
    try {
      const response = await fetch(`/api/voting/${type}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(stats)
      });
      const data = await response.json();
      if (type === 'combined') {
        setVotingStats(data.stats);
      } else if (type === 'separate') {
        setVotingStats2(data.stats);
      }
    } catch (error) {
      console.error('Error updating voting stats:', error);
    }
  };

  const handleCombinedVoting = async (voteType) => {
    const updatedStats = combinedVotingFunction(votingStats, voteType);
    await updateVotingStats(updatedStats, 'combined');
  };

  const handleSeparateVoting = async (voteType) => {
    const updatedStats = separateVotingFunction(votingStats2, voteType);
    await updateVotingStats(updatedStats, 'separate');
  };

  return (
    <>
      <div className="flex justify-center items-center mt-1">
        <div className="card w-auto bg-zinc-900 text-neutral-content">
          <div className="card-body items-center text-center">
            <h1 className="text-center text-3xl font-bold">Hello react-votecom</h1>
            <h2 className="card-title">Post</h2>
            <p>We are using post for test npm package</p>
            <p className="font-bold text-purple-400">CombinedVoting</p>
            <div className="card-actions justify-center">
              <button onClick={() => handleCombinedVoting('upvote')} className="btn bg-black text-2xl text-green-600">UpVote</button>
              <button onClick={() => handleCombinedVoting('downvote')} className="btn bg-black text-2xl text-red-600">DownVote</button>
            </div>
            <div className="font-bold text-lg">
              <p className="text-purple-400">{votingStats.count ? votingStats.count : 0}</p>
              <div className="space-x-3 ">
                <span className="text-green-600">{votingStats.upvotePercentage ? votingStats.upvotePercentage : 0}%</span>
                <span className="text-red-600">{votingStats.downvotePercentage ? votingStats.downvotePercentage : 0}%</span>
              </div>
            </div>

            <p className="font-bold text-purple-400">SeparateVoting</p>
            <div className="card-actions justify-end">
              <button onClick={() => handleSeparateVoting('upvote')} className="btn bg-black text-2xl text-green-600">UpVote</button>
              <button onClick={() => handleSeparateVoting('downvote')} className="btn bg-black text-2xl text-red-600">DownVote</button>
            </div>
            <div className="space-x-3 text-lg  font-bold">
              <span className="text-green-600">{votingStats2.upvotes ? votingStats2.upvotes : 0}</span>
              <span className="text-red-600">{votingStats2.downvotes ? votingStats2.downvotes : 0}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
```

#### React TSX Example with API
###### tsx
```tsx
import React, { useEffect, useState } from 'react';
interface VotingStats {
  upvotes: number;
  downvotes: number;
}

function App(): JSX.Element {
  const [votingStats, setVotingStats] = useState<VotingStats>({ upvotes: 0, downvotes: 0 });
  const [votingStats2, setVotingStats2] = useState<VotingStats>({ upvotes: 0, downvotes: 0 });

  useEffect(() => {
    fetchVotingStats(); // Fetch initial voting stats from the API
  }, []);

  const fetchVotingStats = async (): Promise<void> => {
    try {
      const response = await fetch('/api/voting/stats');
      const data = await response.json();
      setVotingStats(data.stats1);
      setVotingStats2(data.stats2);
    } catch (error) {
      console.error('Error fetching voting stats:', error);
    }
  };

  const updateVotingStats = async (stats: VotingStats, type: string): Promise<void> => {
    try {
      const response = await fetch(`/api/voting/${type}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(stats)
      });
      const data = await response.json();
      if (type === 'combined') {
        setVotingStats(data.stats);
      } else if (type === 'separate') {
        setVotingStats2(data.stats);
      }
    } catch (error) {
      console.error('Error updating voting stats:', error);
    }
  };

  const handleCombinedVoting = async (voteType: string): Promise<void> => {
    const updatedStats = combinedVotingFunction(votingStats, voteType);
    await updateVotingStats(updatedStats, 'combined');
  };

  const handleSeparateVoting = async (voteType: string): Promise<void> => {
    const updatedStats = separateVotingFunction(votingStats2, voteType);
    await updateVotingStats(updatedStats, 'separate');
  };

  return (
    <div className="flex justify-center items-center mt-1">
      <div className="card w-auto bg-zinc-900 text-neutral-content">
        <div className="card-body items-center text-center">
          <h1 className="text-center text-3xl font-bold">Hello react-votecom</h1>
          <h2 className="card-title">Post</h2>
          <p>We are using post for test npm package</p>
          <p className="font-bold text-purple-400">CombinedVoting</p>
          <div className="card-actions justify-center">
            <button onClick={() => handleCombinedVoting('upvote')} className="btn bg-black text-2xl text-green-600">UpVote</button>
            <button onClick={() => handleCombinedVoting('downvote')} className="btn bg-black text-2xl text-red-600">DownVote</button>
          </div>
          <div className="font-bold text-lg">
            <p className="text-purple-400">{votingStats.count ? votingStats.count : 0}</p>
            <div className="space-x-3 ">
              <span className="text-green-600">{votingStats.upvotePercentage ? votingStats.upvotePercentage : 0}%</span>
              <span className="text-red-600">{votingStats.downvotePercentage ? votingStats.downvotePercentage : 0}%</span>
            </div>
          </div>

          <p className="font-bold text-purple-400">SeparateVoting</p>
          <div className="card-actions justify-end">
            <button onClick={() => handleSeparateVoting('upvote')} className="btn bg-black text-2xl text-green-600">UpVote</button>
            <button onClick={() => handleSeparateVoting('downvote')} className="btn bg-black text-2xl text-red-600">DownVote</button>
          </div>
          <div className="space-x-3 text-lg  font-bold">
            <span className="text-green-600">{votingStats2.upvotes ? votingStats2.upvotes : 0}</span>
            <span className="text-red-600">{votingStats2.downvotes ? votingStats2.downvotes : 0}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

```
These examples demonstrate how to use the react-votecom package with React in both JavaScript (JSX) and TypeScript (TSX) and fetch data from an API. Adjust the API endpoint according to your actual implementation.

## License
This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Contributing
We welcome contributions to the react-votecom project! If you're interested in contributing, here's how you can get started:

1. **Fork the Repository**: Start by forking the react-votecom repository to your own GitHub account.

2. **Clone the Repository**: Clone the repository to your local machine using the following command:

   ```bash
   git clone https://github.com/your-username/react-votecom.git
   ```

3. **Create a New Branch**: Create a new branch for your contributions using a descriptive name:

   ```bash
   git checkout -b feature/new-feature
   ```

4. **Make Changes**: Make your desired changes to the codebase. Ensure that your changes adhere to the coding standards and guidelines of the project.

5. **Test Your Changes**: Test your changes thoroughly to ensure that they work as expected and do not introduce any regressions.

6. **Commit Your Changes**: Once you're satisfied with your changes, commit them to your branch with descriptive commit messages:

   ```bash
   git commit -m "Add new feature: Description of the feature"
   ```

7. **Push Changes**: Push your changes to your forked repository:

   ```bash
   git push origin feature/new-feature
   ```

8. **Submit a Pull Request**: Finally, submit a pull request from your branch to the main repository's `main` branch. Be sure to provide a detailed description of your changes and any related issues or pull requests.

We appreciate your contributions to making react-votecom even better!
