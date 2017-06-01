import { IApiResult } from '../interfaces/api-result';


/**
 * Make api-result from data. (under development)
 *
 * @param {T} data
 * @param {string} message
 * @return {IApiResult<T>}
 */
export function makeApiResult<T>(data: T, message?: string): IApiResult<T> {
  return {
    data: data,
    message: message
  }
}
