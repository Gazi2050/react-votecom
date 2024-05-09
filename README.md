# react-votecom
A React component package for implementing voting and commenting functionality in web applications.

## Installation
You can install react-votecom using npm:

```bash
npm install react-votecom
```

## Introduction
React-votecom is a package that provides easy-to-use components for adding voting and commenting features to your Ts,Js,React applications. It simplifies the process of managing voting statistics and integrates seamlessly with your projects.

## Demo
[Demo1](https://react-votecom-demo1.surge.sh)

## Package Overview
The react-votecom package includes several functions and interfaces to manage voting statistics, perform voting operations, and handle comments.

### Functions
- `separateVotingFunction`: Increments either the upvotes or downvotes count in the voting stats object.
- `combinedVotingFunction`: Updates the combined vote count and calculates the percentages of upvotes and downvotes.
- `comment`: Function for adding comments and managing comment stats.

### Interfaces
- `VotingStats`: Represents the voting statistics, including the number of upvotes and downvotes.
- `VotingResult`: Represents the result of a voting operation, including the combined vote count and the percentages of upvotes and downvotes.
- `Comment`: Represents a single comment, including its ID and text.
- `CommentStats`: Represents the total number of comments.

## Usage

### Voting Function
### Using with JavaScript or TypeScript With API
#### Usage with TypeScript (TS)
###### ts
```typescript
import { useEffect, useState } from 'react';
import { separateVotingFunction, combinedVotingFunction, VotingStats } from 'react-votecom';

// Define the type for the response from the API
interface VotingApiResponse {
  upvotes: number;
  downvotes: number;
}

const VotingComponent = () => {
  const [votingStats, setVotingStats] = useState<VotingStats>({ upvotes: 0, downvotes: 0 });

  useEffect(() => {
    fetch('https://example.com/api/voting/stats')
      .then(response => response.json() as Promise<VotingApiResponse>) // Cast response to VotingApiResponse
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

  return {
    votingStats,
    handleUpvote,
    handleDownvote,
    handleCombinedVoting
  };
};

export default VotingComponent;

```

#### Usage with JavaScript (JS)
###### js
```javascript
import { separateVotingFunction, combinedVotingFunction, VotingStats } from 'react-votecom';

// Example usage with API
fetch('https://api.example.com/voting/stats')
  .then(response => response.json())
  .then(data => {
    // Assuming the API response is in the format { upvotes: number, downvotes: number }
    const initialVotingStats: VotingStats = data;
    
    // Increment upvote count using separateVotingFunction
    const updatedStats = separateVotingFunction(initialVotingStats, 'upvote');
    console.log('Updated Voting Stats:', updatedStats);

    // Calculate voting result using combinedVotingFunction
    const voteResult = combinedVotingFunction(initialVotingStats, 'upvote');
    console.log('Vote Result:', voteResult);
  })
  .catch(error => console.error('Error fetching voting stats:', error));

// Example usage with Database Link
// Assuming you have a database link and method to retrieve voting stats
const initialVotingStats: VotingStats = getVotingStatsFromDatabase();

// Increment upvote count using separateVotingFunction
const updatedStats = separateVotingFunction(initialVotingStats, 'upvote');
console.log('Updated Voting Stats:', updatedStats);

// Calculate voting result using combinedVotingFunction
const voteResult = combinedVotingFunction(initialVotingStats, 'upvote');
console.log('Vote Result:', voteResult);
```
These examples demonstrate separate usage for JavaScript and TypeScript, along with how you can integrate the voting functions with an API or retrieve data from a database. Adjust the API endpoint or database retrieval method according to your actual implementation.

### Using Voting function with React With API
Here's how you can use the react-votecom package with React in both JavaScript (JSX) and TypeScript (TSX) separately, along with examples that fetch data from an API:

#### React JSX Example with API
###### jsx
```jsx
import React, { useEffect, useState } from 'react';
import { separateVotingFunction, combinedVotingFunction} from 'react-votecom';

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

  const handleCombinedVoting = (voteType) => {
    const updatedStats = combinedVotingFunction(votingStats, voteType);
    setVotingStats(updatedStats);
  };

  return (
    <div>
      <h2>Voting Stats</h2>
      <p>Upvotes: {votingStats.upvotes}</p>
      <p>Downvotes: {votingStats.downvotes}</p>
      <button onClick={handleUpvote}>Upvote</button>
      <button onClick={handleDownvote}>Downvote</button>
      <button onClick={() => handleCombinedVoting('upvote')}>Upvote</button>
      <button onClick={() => handleCombinedVoting('downvote')}>Downvote</button>
    </div>
  );
};

export default VotingComponent;

```

#### React TSX Example with API
###### tsx
```tsx
import React, { useEffect, useState } from 'react';
import { separateVotingFunction, combinedVotingFunction, VotingStats } from 'react-votecom';

// Define the type for the response from the API
interface VotingApiResponse {
  upvotes: number;
  downvotes: number;
}

const VotingComponent = () => {
  const [votingStats, setVotingStats] = useState<VotingStats>({ upvotes: 0, downvotes: 0 });

  useEffect(() => {
    fetch('https://example.com/api/voting/stats')
      .then(response => response.json() as Promise<VotingApiResponse>) // Cast response to VotingApiResponse
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
    const updatedStats = combinedVotingFunction(votingStats.upvotes, 'upvote');
    setVotingStats({ ...votingStats, upvotes: updatedStats });
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
These examples demonstrate how to use the react-votecom package with React in both JavaScript (JSX) and TypeScript (TSX) and fetch data from an API. Adjust the API endpoint according to your actual implementation.


### Comment Function(Under Development)
### Using with JavaScript or TypeScript With API
#### Usage with TypeScript (TS)
###### ts
```typescript
import { comment, CommentStats } from 'react-votecom';

interface Post {
  id: number;
  title: string;
  body: string;
}

const fetchAndAddComment = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const postData: Post = await response.json();

    const commentStats: CommentStats = { totalComments: 0 };
    const [comments, deleteComment] = comment(commentStats, postData.body);

    console.log('Comments:', comments);
  } catch (error) {
    console.error('Error fetching post data:', error);
  }
};

fetchAndAddComment();

```

#### Usage with JavaScript (JS)
###### ts
```JavaScript
const reactVotecom = require('react-votecom');

const fetchAndAddComment = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const postData = await response.json();

    const commentStats = { totalComments: 0 };
    const [comments, deleteComment] = reactVotecom.comment(commentStats, postData.body);

    console.log('Comments:', comments);
  } catch (error) {
    console.error('Error fetching post data:', error);
  }
};

fetchAndAddComment();

```
These examples demonstrate separate usage for JavaScript and TypeScript, along with how you can integrate the comment functions with an API or retrieve data from a database. Adjust the API endpoint or database retrieval method according to your actual implementation.

### Using Comment function with React With API
Here's how you can use the react-votecom package with React in both JavaScript (JSX) and TypeScript (TSX) separately, along with examples that fetch data from an API:


#### React JSX Example with API
###### jsx
```jsx
import React, { useEffect, useState } from 'react';
import reactVotecom from 'react-votecom';

const PostComponent = () => {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const postData = await response.json();
        setPost(postData);

        const commentStats = { totalComments: 0 };
        const [newComments] = reactVotecom.comment(commentStats, postData.body);
        setComments(newComments);
      } catch (error) {
        console.error('Error fetching post data:', error);
      }
    };

    fetchPostData();
  }, []);

  return (
    <div>
      {post && (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
      <h3>Comments</h3>
      {comments.map(comment => (
        <p key={comment.id}>{comment.text}</p>
      ))}
    </div>
  );
};

export default PostComponent;

```

#### React TSX Example with API
###### tsx
```tsx
import React, { useEffect, useState } from 'react';
import { comment, CommentStats } from 'react-votecom';

interface Post {
  id: number;
  title: string;
  body: string;
}

const PostComponent: React.FC = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const postData: Post = await response.json();
        setPost(postData);

        const commentStats: CommentStats = { totalComments: 0 };
        const [newComments] = comment(commentStats, postData.body);
        setComments(newComments);
      } catch (error) {
        console.error('Error fetching post data:', error);
      }
    };

    fetchPostData();
  }, []);

  return (
    <div>
      {post && (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
      <h3>Comments</h3>
      {comments.map(comment => (
        <p key={comment.id}>{comment.text}</p>
      ))}
    </div>
  );
};

export default PostComponent;

```
These examples demonstrate how to use the react-votecom package with React in both JavaScript (JSX) and TypeScript (TSX) and fetch data from an API. Adjust the API endpoint according to your actual implementation.


## License
This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

Sure, here's the updated section:


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
