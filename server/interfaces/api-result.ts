/**
 * a interface of api-result (version 1)
 */
export interface IApiResult<T> {
  data: T,
  message?: string;
  error?: Error
}
