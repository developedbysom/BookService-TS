export class ApiReponse<T> {
  constructor(
    public success: boolean,
    public data: T | null = null,
    public error: string | null = null
  ) {}

  static success<T>(data: T): ApiReponse<T> {
    return new ApiReponse(true, data);
  }

  static error<T>(error: string): ApiReponse<T | null> {
    return new ApiReponse(false, null, error);
  }
}
