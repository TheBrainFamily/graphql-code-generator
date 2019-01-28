import { SafeString } from 'handlebars';
import { Field, Type, Interface, Union } from 'graphql-codegen-core';
export declare function importFromGraphQL(options: Handlebars.HelperOptions): string;
export declare const getFieldType: (convert: any, isPartial?: boolean) => (field: Field, options: Handlebars.HelperOptions) => string;
export declare const getFieldResolverName: (convert: any, config: any) => (name: string) => string;
export declare const getFieldResolver: (convert: any) => (field: Field, type: Type, options: Handlebars.HelperOptions) => "" | SafeString;
export declare function getTypenames(entity: Interface | Union): string;
export declare function isInterface(entity: any): entity is Interface;