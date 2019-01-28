import { TypeScriptCommonConfig } from 'graphql-codegen-typescript-common';
import { PluginValidateFn, PluginFunction } from 'graphql-codegen-core';
export interface TypeScriptMongoDbConfig extends TypeScriptCommonConfig {
}
export declare const plugin: PluginFunction<TypeScriptMongoDbConfig>;
declare const addToSchema: any;
export { addToSchema };
export { addToSchema as DIRECTIVES };
export declare const validate: PluginValidateFn<any>;
