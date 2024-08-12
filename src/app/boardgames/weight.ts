export enum Weight {
  LIGHT = 'LIGHT',
  MEDIUM_LIGHT = 'MEDIUM_LIGHT',
  MEDIUM = 'MEDIUM',
  MEDIUM_HEAVY = 'MEDIUM_HEAVY',
  HEAVY = 'HEAVY',
}

const weightValue: Record<Weight, number> = {
  [Weight.LIGHT]: 1,
  [Weight.MEDIUM_LIGHT]: 2,
  [Weight.MEDIUM]: 3,
  [Weight.MEDIUM_HEAVY]: 4,
  [Weight.HEAVY]: 5,
};

export const getWeightValue: (val: Weight) => number = (val: Weight) => {
  return weightValue[val];
};
