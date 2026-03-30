export interface FanGraphsRecord {
  TeamId: number;
  League: string;
  Division: string;
  ShortName: string;
  AbbName: string;
  GameDate: string;
  dh: number;
  AwayTeamId: number;
  HomeTeamId: number;
  isHome: number;
  OpponentId: number;
  OpponentAbbName: string;
  teamSPPlayerId: string | null;
  teamSPPlayerName: string | null;
  teamSPPlayerNameRoute: string | null;
  Throws: string | null;
  notes: string | null;
}

export interface OpposingProbable {
  date: string;
  dayOfWeek: string;
  opponent: string;
  isAway: boolean;
  pitcher: string | null;
  hand: string | null;
  dh: number;
}

export interface TeamData {
  abbName: string;
  shortName: string;
  league: string;
  division: string;
  games: OpposingProbable[];
}

export interface GridData {
  teams: TeamData[];
  dates: string[];
  lastUpdated: string;
}
