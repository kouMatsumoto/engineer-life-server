import { IApiErrorResult } from '../interfaces/api-result';


/**
 * Make api-result from a error. (under development)
 *
 * @param {Error} error
 * @return {IApiErrorResult}
 */
export function makeApiErrorResult(error: Error): IApiErrorResult {
  return {
    error: error,
    message: error.message
  }
}
