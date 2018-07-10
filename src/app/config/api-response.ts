export interface ApiResponse extends Response {
    code: string,
    data: object | Array<any> | any,
    message: string,
    index: number,
    count: number,
    previous: number,
    next: number
}
