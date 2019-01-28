import { TypeScriptCommonConfig } from 'graphql-codegen-typescript-common';
import { PluginFunction } from 'graphql-codegen-core';
export interface TypeScriptServerResolversConfig extends TypeScriptCommonConfig {
    strict?: boolean;
    noNamespaces?: boolean;
    contextType?: string;
    mappers?: {
        [name: string]: string;
    };
    defaultMapper?: string;
    fieldResolverNamePrefix?: string;
}
export declare const plugin: PluginFunction<TypeScriptServerResolversConfig>;
