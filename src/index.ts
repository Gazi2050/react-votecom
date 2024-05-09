
import { useState } from 'react';


export interface VotingStats {
    upvotes: number;
    downvotes: number;
}

export function separateVotingFunction(votingStats: VotingStats, voteType: 'upvote' | 'downvote'): VotingStats {
    if (voteType === 'upvote') {
        return { ...votingStats, upvotes: votingStats.upvotes + 1 };
    } else if (voteType === 'downvote') {
        return { ...votingStats, downvotes: votingStats.downvotes + 1 };
    } else {
        throw new Error('Invalid vote type. Must be "upvote" or "downvote".');
    }
}

export interface VotingResult {
    count: number;
    upvotePercentage: number;
    downvotePercentage: number;
}

export function combinedVotingFunction(votingStats: VotingStats, voteType: 'upvote' | 'downvote'): VotingResult {
    let upvotes = votingStats.upvotes;
    let downvotes = votingStats.downvotes;
    let totalCount = upvotes + downvotes;

    if (voteType === 'upvote') {
        upvotes++;
        totalCount++;
    } else if (voteType === 'downvote') {
        downvotes++;
        totalCount--;
    } else {
        throw new Error('Invalid vote type. Must be "upvote" or "downvote".');
    }

    const upvotePercentage = totalCount === 0 ? 0 : parseFloat((upvotes / totalCount * 100).toFixed(2));
    const downvotePercentage = totalCount === 0 ? 0 : parseFloat((downvotes / totalCount * 100).toFixed(2));

    return { count: totalCount, upvotePercentage, downvotePercentage };
}


export interface Comment {
    id: number;
    text: string;
}

export interface CommentStats {
    totalComments: number;
}

export function comment(commentStats: CommentStats, newComment: string): [Comment[], (id: number) => void] {
    const [comments, setComments] = useState<Comment[]>([]);

    const addComment = (text: string) => {
        const newComment: Comment = {
            id: comments.length + 1,
            text
        };
        setComments([...comments, newComment]);
    };

    const deleteComment = (id: number) => {
        setComments(comments.filter(comment => comment.id !== id));
    };

    addComment(newComment);

    return [comments, deleteComment];
}
