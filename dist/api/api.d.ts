/// <reference types="lodash" />
import { ApiDispatchers, ApiObjectProcessors, ApiOptions, JsonResult, UnprocessedJsonResult } from "../types/api";
export declare const extractIssueCodes: (object: UnprocessedJsonResult, issueType?: string) => any;
export declare const extractErrorMessages: import("lodash").Function1<UnprocessedJsonResult, any>;
export declare const extractWarningMessages: import("lodash").Function1<UnprocessedJsonResult, any>;
export declare const extractErrorCodes: import("lodash").Function1<UnprocessedJsonResult, any>;
declare type ApiConnection = {
    apiUrl: string;
    version: string;
};
export declare class Api {
    apiName: string;
    apiUrl: string;
    apiVersion: string;
    authPromise: Promise<any> | undefined;
    apiDispatchers: ApiDispatchers | undefined | null;
    apiObjectProcessors: ApiObjectProcessors | undefined | null;
    handleError: (status: number, errorMessage: string, object: Record<string, any>, options: ApiOptions) => void;
    constructor(apiName: string, { apiUrl, version }: ApiConnection, handleError?: (status: number, errorMessage: string, object: Record<string, any>, options: ApiOptions) => void);
    getAcceptVersionHeader: () => string;
    getCommonHeaders: () => {
        headers: {
            accept: string;
            "x-request-id": string;
        };
    };
    getBlob: (urlSuffix: string) => any;
    sendBlobRequest: (method: string, urlSuffix: string, body?: {
        [x: string]: any;
    } | undefined, options?: ApiOptions) => any;
    postBlob: (urlSuffix: string, blob: Blob, options?: ApiOptions) => Promise<JsonResult<any>>;
    getJson: (urlSuffix: string, options?: ApiOptions) => Promise<JsonResult<any>>;
    sendJsonUpdateRequest: (method: string, urlSuffix: string, object: {
        [x: string]: any;
    }, options?: ApiOptions) => Promise<JsonResult<any>>;
    postJson: (urlSuffix: string, object: {
        [x: string]: any;
    }, options?: ApiOptions) => Promise<JsonResult<any>>;
    putJson: (urlSuffix: string, object: {
        [x: string]: any;
    }, options?: ApiOptions) => Promise<JsonResult<any>>;
    patchJson: (urlSuffix: string, object: {
        [x: string]: any;
    }, options?: ApiOptions) => Promise<JsonResult<any>>;
    deleteJson: (urlSuffix: string, object: {
        [x: string]: any;
    }, options?: ApiOptions) => Promise<JsonResult<any>>;
    processJsonResponse: (response: {
        [x: string]: any;
    }, options?: ApiOptions) => JsonResult<any>;
    processCatch: (urlSuffix: string, options: ApiOptions, error: Error) => JsonResult<any>;
    setDispatchers: (apiDispatchers: ApiDispatchers) => void;
    setObjectProcessors: (objectProcessors: ApiObjectProcessors) => void;
}
export {};
