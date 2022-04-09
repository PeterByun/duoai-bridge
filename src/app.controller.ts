import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

import { TeamRank } from './features/pro-matches/team';

import { MatchRecord, MatchTeamData } from './features/pro-matches/match';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // Landing
  @Get('team-ranks/:leagueName')
  getTeamRanksByLeague(@Param('leagueName') leagueName): TeamRank[] {
    return this.appService.getTeamRanksByLeague(leagueName);
  }
  // League Detail
  @Get('league-detail/:leagueName')
  getMatchRecordsByLeague(@Param('leagueName') leagueName): MatchRecord[] {
    return this.appService.getMatchRecordsByLeague(leagueName);
  }
  @Get('top-ten-players')
  getTopTenPlayersByLeagueAndPosition(): string {
    return this.appService.getTopTenPlayersByLeagueAndPosition();
  }
  // Match Detail
  @Get('match-detail/:matchId')
  getMatchDetail(@Param('matchId') matchId): MatchTeamData {
    return this.appService.getMatchDetail(matchId);
  }
  // Team Detail
  @Get('team-detail')
  getTeamRanks(): string {
    return this.appService.getTeamRanks();
  }
  @Get('members')
  getMemberDataList(): string {
    return this.appService.getMemberDataList();
  }
}
