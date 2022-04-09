import { Injectable } from '@nestjs/common';

import {
  teamRanksByLeague,
  LeagueName,
  TeamRank,
} from './features/pro-matches/team';

import {
  matchDetailById,
  MatchRecord,
  matchRecordsByLeague,
  MatchTeamData,
} from './features/pro-matches/match';

@Injectable()
export class AppService {
  getTeamRanksByLeague(leagueName: LeagueName): TeamRank[] {
    return teamRanksByLeague[leagueName];
  }
  getMatchRecordsByLeague(leagueName: LeagueName): MatchRecord[] {
    return matchRecordsByLeague[leagueName];
  }
  getTopTenPlayersByLeagueAndPosition(): string {
    return 'getTopTenPlayersByLeagueAndPosition';
  }
  getMatchDetail(matchId: string): MatchTeamData {
    return matchDetailById[matchId];
  }
  getTeamRanks(): string {
    return 'getTeamRanks';
  }
  getMemberDataList(): string {
    return 'getMemberDataList';
  }
}
