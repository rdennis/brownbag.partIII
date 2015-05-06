/// <reference path="../promise/promise.d.ts" />
/********************************************************
 * Type Definitions for express-handlebars (https://www.npmjs.com/package/express-handlebars).
 * @author Robert Dennis
 *******************************************************/

declare module ExpressHandlebars {
    interface IHelpers {
        [name: string]: Function;
    }

    interface ITemplateReference {
        filename: string;
    }

    interface IPartialsDirConfiguration {
        dir: string;
        namespace?: string;
        templates?: ITemplateReference[] | Promise.Promise;
    }

    interface Configuration {
        compilerOptions?: Object;
        defaultLayout?: string;
        extname?: string;
        handlebars?: any;
        helpers?: IHelpers;
        layoutsDir?: string;
        partialsDir?: string | IPartialsDirConfiguration | string[] | IPartialsDirConfiguration[];
    }

    interface RenderViewFunctionOptions {
        cache?: boolean;
        data?: Object;
        helpers?: IHelpers;
        layout?: string;
        partials?: { [partialName: string]: Function } | Promise.PromiseGeneric<{ [partialName: string]: Function }>;
    }

    interface RenderViewFunction {
        (viewPath: string, options?: RenderViewFunctionOptions, callback?: Function): void;
        (viewPath: string, callback: Function): void;
    }

    interface ExpressHandlebars extends Configuration, Function {
        compiled: { [templatePath: string]: Function };
        engine: RenderViewFunction;
        extname: string;
        precompiled: { [templatePath: string]: string };

        getPartials(options?: { cache: boolean; precompiled?: boolean }): Promise.PromiseGeneric<{ [name: string]: Function }>;
        renderView: RenderViewFunction;
    }

    interface ExpressHandlebarsFactory {
        (config: Configuration): ExpressHandlebars;
        create(config: Configuration): ExpressHandlebars;
    }
}

declare module 'express-handlebars' {
    var factory: ExpressHandlebars.ExpressHandlebarsFactory;
    export = factory;
}
