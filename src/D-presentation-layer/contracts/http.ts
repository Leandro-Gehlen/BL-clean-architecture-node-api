export type HttpResponse<T = any> = {
    statusCode: number;
    Data: T;
}