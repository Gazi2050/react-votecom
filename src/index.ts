import { useState } from 'react';

export interface VotingStats {
    upvotes: number;
    downvotes: number;
    totalVote2?: number;
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
    upvotes: number;
    downvotes: number;
    upvotePercentage: number;
    downvotePercentage: number;
    totalVote2?: number;
}

export function combinedVotingFunction(votingStats: VotingStats, voteType: 'upvote' | 'downvote'): VotingResult {
    let upvotes = votingStats.upvotes;
    let downvotes = votingStats.downvotes;
    let totalCount = Math.max(0, upvotes - downvotes);

    // Initialize totalVote2 to 0 if it's not present in votingStats
    let totalVote2 = votingStats.totalVote2 || 0;

    if (voteType === 'upvote') {
        upvotes++;
        totalVote2++;
    } else if (voteType === 'downvote') {
        downvotes++;
        totalVote2++;
    } else {
        throw new Error('Invalid vote type. Must be "upvote" or "downvote".');
    }

    // Adjust totalCount if there is at least one upvote
    if (upvotes > 0) {
        totalCount = Math.max(1, upvotes - downvotes);
    }
    if (downvotes > 0) {
        totalCount = Math.max(0, upvotes - downvotes);
    }

    const upvotePercentage = totalVote2 === 0 ? 0 : parseFloat((upvotes / totalVote2 * 100).toFixed(2));
    const downvotePercentage = totalVote2 === 0 ? 0 : parseFloat((downvotes / totalVote2 * 100).toFixed(2));

    return { count: totalCount, upvotePercentage, downvotePercentage, totalVote2, upvotes, downvotes };
}

