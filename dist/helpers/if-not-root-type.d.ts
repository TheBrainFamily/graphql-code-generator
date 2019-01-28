/// <reference types="handlebars" />
import { Type } from 'graphql-codegen-core';
declare function ifNotRootType(this: any, type: Type, options: Handlebars.HelperOptions): string;
export default ifNotRootType;
