/*

undefined
Set of booking state transitions

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Units_ from './units';
import * as State_ from './state';
import * as Errors_ from './errors';

export type Defined = {} | null;
export class DefinedType extends t.Type<Defined> {
  readonly _tag: 'DefinedType' = 'DefinedType';
  constructor() {
    super(
      'defined',
      (u): u is Defined => typeof u !== 'undefined',
      (u, c) => (this.is(u) ? t.success(u) : t.failure(u, c)),
      t.identity,
    );
  }
}
export interface DefinedC extends DefinedType {}
export const Defined: DefinedC = new DefinedType();

export const schemaId = 'http://maasglobal.com/core/components/state-log.json';

// ObsoleteTime
// The purpose of this remains a mystery
export type ObsoleteTime = t.Branded<string, ObsoleteTimeBrand>;
export type ObsoleteTimeC = t.BrandC<t.StringC, ObsoleteTimeBrand>;
export const ObsoleteTime: ObsoleteTimeC = t.brand(
  t.string,
  (x): x is t.Branded<string, ObsoleteTimeBrand> =>
    typeof x !== 'string' || x.match(RegExp('^[0-9]+$')) !== null,
  'ObsoleteTime',
);
export interface ObsoleteTimeBrand {
  readonly ObsoleteTime: unique symbol;
}

// BookingStateTransition
// The purpose of this remains a mystery
export type BookingStateTransition = t.Branded<
  ({
    timestamp?: Units_.Time | ObsoleteTime;
    oldState?: State_.BookingState;
    newState?: State_.BookingState;
    invalid?: boolean;
    reason?: Errors_.Reason;
  } & Record<string, unknown>) & {
    newState: Defined;
    oldState: Defined;
    timestamp: Defined;
  },
  BookingStateTransitionBrand
>;
export type BookingStateTransitionC = t.BrandC<
  t.IntersectionC<
    [
      t.IntersectionC<
        [
          t.PartialC<{
            timestamp: t.UnionC<[typeof Units_.Time, typeof ObsoleteTime]>;
            oldState: typeof State_.BookingState;
            newState: typeof State_.BookingState;
            invalid: t.BooleanC;
            reason: typeof Errors_.Reason;
          }>,
          t.RecordC<t.StringC, t.UnknownC>,
        ]
      >,
      t.TypeC<{
        newState: typeof Defined;
        oldState: typeof Defined;
        timestamp: typeof Defined;
      }>,
    ]
  >,
  BookingStateTransitionBrand
>;
export const BookingStateTransition: BookingStateTransitionC = t.brand(
  t.intersection([
    t.intersection([
      t.partial({
        timestamp: t.union([Units_.Time, ObsoleteTime]),
        oldState: State_.BookingState,
        newState: State_.BookingState,
        invalid: t.boolean,
        reason: Errors_.Reason,
      }),
      t.record(t.string, t.unknown),
    ]),
    t.type({
      newState: Defined,
      oldState: Defined,
      timestamp: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    ({
      timestamp?: Units_.Time | ObsoleteTime;
      oldState?: State_.BookingState;
      newState?: State_.BookingState;
      invalid?: boolean;
      reason?: Errors_.Reason;
    } & Record<string, unknown>) & {
      newState: Defined;
      oldState: Defined;
      timestamp: Defined;
    },
    BookingStateTransitionBrand
  > => true,
  'BookingStateTransition',
);
export interface BookingStateTransitionBrand {
  readonly BookingStateTransition: unique symbol;
}

// StateLog
// The default export. More information at the top.
export type StateLog = t.Branded<Array<BookingStateTransition>, StateLogBrand>;
export type StateLogC = t.BrandC<t.ArrayC<typeof BookingStateTransition>, StateLogBrand>;
export const StateLog: StateLogC = t.brand(
  t.array(BookingStateTransition),
  (x): x is t.Branded<Array<BookingStateTransition>, StateLogBrand> => true,
  'StateLog',
);
export interface StateLogBrand {
  readonly StateLog: unique symbol;
}

export default StateLog;

// Success
