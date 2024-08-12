import { Weight } from './weight';

export interface NumberRange {
  min: number;
  max: number;
}

export interface PlayerCountProperties {
  range: NumberRange;
  suggested: number[];
  best: number[];
}

export interface GameStats {
  playtime: NumberRange;
  weight: Weight;
  playerCount: PlayerCountProperties;
}

export interface GameProperties {
  type: string;
  imageUrl: string;
  thumbnailUrl: string;
}

export interface Game {
  id: number;
  name: string;
  properties: GameProperties;
  stats: GameStats;
}
