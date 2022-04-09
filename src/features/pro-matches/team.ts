export type LeagueName = 'lck' | 'lpl' | 'lec' | 'lcs';
export type TeamRank = {
  rank: number;
  name: string;
  wins: number;
  losses: number;
  pointsDifference: number;
  winRatio: number;
};

export const teamRanksByLeague = {
  lck: [
    {
      rank: 1,
      name: 'T1',
      wins: 23,
      losses: 4,
      pointsDifference: 24,
      winRatio: 3.2,
    },
    {
      rank: 2,
      name: '젠지',
      wins: 18,
      losses: 4,
      pointsDifference: 15,
      winRatio: 3.1,
    },
    {
      rank: 3,
      name: '담원 기아',
      wins: 16,
      losses: 4,
      pointsDifference: 13,
      winRatio: 2.2,
    },
    {
      rank: 4,
      name: 'DRX',
      wins: 12,
      losses: 4,
      pointsDifference: 21,
      winRatio: 5.2,
    },
    {
      rank: 5,
      name: '광동',
      wins: 14,
      losses: 4,
      pointsDifference: 15,
      winRatio: 2.2,
    },
  ],
  lpl: [
    {
      rank: 5,
      name: 'T1',
      wins: 23,
      losses: 4,
      pointsDifference: 24,
      winRatio: 3.2,
    },
    {
      rank: 4,
      name: '젠지',
      wins: 18,
      losses: 4,
      pointsDifference: 15,
      winRatio: 3.1,
    },
    {
      rank: 3,
      name: '담원 기아',
      wins: 16,
      losses: 4,
      pointsDifference: 13,
      winRatio: 2.2,
    },
    {
      rank: 2,
      name: 'DRX',
      wins: 12,
      losses: 4,
      pointsDifference: 21,
      winRatio: 5.2,
    },
    {
      rank: 1,
      name: '광동',
      wins: 14,
      losses: 4,
      pointsDifference: 15,
      winRatio: 2.2,
    },
  ],
  lec: [
    {
      rank: 4,
      name: 'T1',
      wins: 23,
      losses: 4,
      pointsDifference: 24,
      winRatio: 3.2,
    },
    {
      rank: 2,
      name: 'T2',
      wins: 18,
      losses: 4,
      pointsDifference: 15,
      winRatio: 3.1,
    },
    {
      rank: 5,
      name: 'CJ',
      wins: 16,
      losses: 4,
      pointsDifference: 13,
      winRatio: 2.2,
    },
    {
      rank: 1,
      name: '진에어',
      wins: 12,
      losses: 4,
      pointsDifference: 21,
      winRatio: 5.2,
    },
    {
      rank: 3,
      name: '카카오',
      wins: 14,
      losses: 4,
      pointsDifference: 15,
      winRatio: 2.2,
    },
  ],
  lcs: [
    {
      rank: 4,
      name: '네이버',
      wins: 23,
      losses: 4,
      pointsDifference: 24,
      winRatio: 3.2,
    },
    {
      rank: 3,
      name: '현대',
      wins: 18,
      losses: 4,
      pointsDifference: 15,
      winRatio: 3.1,
    },
    {
      rank: 2,
      name: '엘지',
      wins: 16,
      losses: 4,
      pointsDifference: 13,
      winRatio: 2.2,
    },
    {
      rank: 1,
      name: '삼성',
      wins: 12,
      losses: 4,
      pointsDifference: 21,
      winRatio: 5.2,
    },
    {
      rank: 5,
      name: '오리온',
      wins: 14,
      losses: 4,
      pointsDifference: 15,
      winRatio: 2.2,
    },
  ],
};
