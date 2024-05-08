// votingFunctions

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

export function combinedVotingFunction(count: number, voteType: 'upvote' | 'downvote'): number {
    if (voteType === 'upvote') {
        return count + 1;
    } else if (voteType === 'downvote') {
        return count - 1;
    } else {
        throw new Error('Invalid vote type. Must be "upvote" or "downvote".');
    }
}
