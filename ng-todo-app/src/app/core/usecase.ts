export interface IUsecase<TRequest, TResponse>{

    execute(request: TRequest): Promise<TResponse>
}