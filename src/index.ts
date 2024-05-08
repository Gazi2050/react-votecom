// votingFunctions.ts

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

    const upvotePercentage = (upvotes / totalCount) * 100;
    const downvotePercentage = (downvotes / totalCount) * 100;

    return { count: totalCount, upvotePercentage, downvotePercentage };
}
