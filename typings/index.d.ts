import 'egg';
import { STATUS_CODES } from 'http';

interface IErrorResponse {
    error: string;
    detail: object;
}

declare global {
    namespace STAT_CODE {
        // common operation
        const OK = 200;
        const FAIL = 201;
        const NO_RESULT = 202;
        const CREATE_FAIL = 203;
        // illegal operation
        const INVALID_FORM = 400;
        // service error
        const SERVICE_ERROR = 500;
    }


    interface IPageFormat {
        limit: number;
        offset: number;
    }

    interface IGetOneOption {
        id: number
    }

    function genErrorBody(error: string, detail: object): IErrorResponse {
        return {
            error: error,
            detail: detail,
        }
    }
}

declare module 'egg' {

}