/// <reference types="handlebars" />
import { Interface, Type } from 'graphql-codegen-core';
declare type FieldsResult = {
    [name: string]: string | FieldsResult;
};
export declare const entityFields: (convert: any) => (type: Type | Interface, options: Handlebars.HelperOptions, returnRaw?: boolean) => string | FieldsResult;
export {};
