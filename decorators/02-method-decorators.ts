export enum LoggingLevel {
    ERROR,
    WARN,
    INFO,
    DEBUG,
    TRACE
}

const appMaxLoggingLevel = LoggingLevel.DEBUG;

export function Log(level: LoggingLevel): MethodDecorator {
    console.log("applying @Log decorator");

    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        // console.log(`target`, target);
        // console.log(`propertyKey`, propertyKey);
        // console.log(`descriptor`, descriptor);
        const originalFunction = descriptor.value;
        descriptor.value = function (...args: any[]) {
            if (level <= appMaxLoggingLevel) {
                console.log(`>> Log: ${propertyKey}: ${JSON.stringify(args)}`);
            }

            originalFunction.apply(this, args);
        }
    }
}

export function Perf():MethodDecorator {
    console.log("applying @Perf decorator");

    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const originalFunctionL:Function = descriptor.value;
        descriptor.value = function (...args: any[]) {
            let start = new Date().getTime();
            console.log(`>> Log: started ${propertyKey} at ${start}`);
            originalFunctionL.apply(this, args);
            let end = new Date().getTime();
            console.log(`>> Log: ended ${propertyKey} at ${end}`);
            console.log(`>> Log: execution time ${propertyKey} ${end - start}`);
        };
    }
}