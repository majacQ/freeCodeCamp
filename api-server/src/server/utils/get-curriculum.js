import { flatten } from 'lodash';

// TODO: this caching is handy if we want to field requests that need to 'query'
// the curriculum, but if we force the client to handle
// redirectToCurrentChallenge and, instead, only report the current challenge
// id via the user object, then we should *not* store this so it can be garbage
// collected.

// if this fails, chances are ensure-env has not been run
import curriculum from '../../../../config/curriculum.json';

export function getChallenges() {
  return Object.keys(curriculum)
    .map(key => curriculum[key].blocks)
    .reduce((challengeArray, superBlock) => {
      const challengesForBlock = Object.keys(superBlock).map(
        key => superBlock[key].challenges
      );
      return [...challengeArray, ...flatten(challengesForBlock)];
    }, []);
}
