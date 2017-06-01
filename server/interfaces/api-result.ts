/**
 * a interface of api-result (version 1)
 */
export interface IApiResult<T> {
  data: T,
  message?: string;
  error?: Error
}

/**
 * a interface of api-result when error (version 1)
 */
export interface IApiErrorResult {
  message?: string;
  error?: Error
}
