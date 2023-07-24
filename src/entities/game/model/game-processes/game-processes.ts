import {TGameCondition, TGameMode, gameInfoByMode} from '../../../types';
import {
  createEffect,
  createEvent,
  createStore,
  forward,
  sample,
} from 'effector';
import {$gameState} from '../game-state';

export const setGameCondition = createEvent<TGameCondition>();
export const $gameCondition = createStore<TGameCondition>('NOTSTARTED').on(
  setGameCondition,
  (_, condition) => {
    console.log(condition);
    return condition;
  },
);

export const setGameMode = createEvent<TGameMode>();
export const $gameMode = createStore<TGameMode>('4_LETTERS').on(
  setGameMode,
  (_, mode) => {
    console.log(mode);
    return mode;
  },
);

export const setShownGameResults = createEvent<boolean>();
export const $gameResultsShown = createStore<boolean>(false).on(
  setShownGameResults,
  (_, payload) => payload,
);

sample({
  clock: setGameCondition,
  fn: condition => {
    return condition == 'WIN' || condition == 'LOSE';
  },
  target: setShownGameResults,
});
