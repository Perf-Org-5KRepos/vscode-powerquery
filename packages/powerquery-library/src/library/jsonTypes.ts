// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export const enum LibraryDefinitionKind {
    Constant = "Constant",
    Constructor = "Constructor",
    Function = "Function",
    Type = "Type",
}

export interface Module {
    readonly name: string;
    readonly version: string | undefined;
}

export interface LibraryDefinition {
    readonly label: string;
    readonly kind: LibraryDefinitionKind;
    readonly summary: string;
    // tslint:disable-next-line: no-reserved-keywords
    readonly module: Module;
    readonly signatures: ReadonlyArray<Signature>;
}

export interface Signature {
    readonly label: string;
    readonly documentation: string | undefined;
    readonly parameters: ReadonlyArray<Parameter>;
}

export interface Parameter {
    readonly label: string;
    readonly documentation: string | undefined;
    readonly labelOffsetStart: number;
    readonly labelOffsetEnd: number;
}