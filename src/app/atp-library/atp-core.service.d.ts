import { System, ITime } from './definitions';
export declare class AtpCoreService {
    constructor();
    allowedTimes(min: any, max: any, system: System): any[];
    ClockMaker(rayon: number, type: 'minute' | 'hour', format: System): Array<any>;
    drawCircle(rayon: number, j: number, start: number, length: number, step: number, type: string): any[];
    TimeToString(time: ITime, system: System): string;
    /**
     * Converts 00:00 system to ITime object
     */
    StringToTime(time: string, system: System): any;
    /**
     * @experimental
     */
    CalcDegrees(ele: any, parrentPos: any, step: number): {
        degrees: number;
        hitDistance: number;
    };
}
