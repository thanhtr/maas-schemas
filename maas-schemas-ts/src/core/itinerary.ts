/*

undefined
OpenTripPlanner itinerary, augmented with leg bookings per leg

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as Units_ from './components/units';
import * as t from 'io-ts';
import * as Common_ from './components/common';
import * as State_ from './components/state';
import * as Fare_ from './components/fare';
import * as Leg_ from './leg';
import * as ProductOption_ from './product-option';
import * as Booking_ from './booking';

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

export const schemaId = 'http://maasglobal.com/core/itinerary.json';

// Id
// The purpose of this remains a mystery
export type Id = t.Branded<Units_.Uuid, IdBrand>;
export type IdC = t.BrandC<typeof Units_.Uuid, IdBrand>;
export const Id: IdC = t.brand(
  Units_.Uuid,
  (x): x is t.Branded<Units_.Uuid, IdBrand> => true,
  'Id',
);
export interface IdBrand {
  readonly Id: unique symbol;
}

// Itinerary
// The default export. More information at the top.
export type Itinerary = t.Branded<
  {
    id?: Id;
    sourcePlanId?: Units_.Uuid;
    isOvertaken?: boolean;
    identityId?: Units_.IdentityId;
    signature?: Common_.Signature;
    state?: State_.ItineraryState;
    startTime?: Units_.Time;
    endTime?: Units_.Time;
    co2?: number;
    fares?: Array<Fare_.Fare>;
    legs?: Array<Leg_.Leg>;
    productOptions?: Array<ProductOption_.ProductOption>;
    type?: 'outward' | 'return';
    bookings?: Array<Booking_.Booking>;
  } & {
    startTime: Defined;
    endTime: Defined;
    legs: Defined;
  },
  ItineraryBrand
>;
export type ItineraryC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        id: typeof Id;
        sourcePlanId: typeof Units_.Uuid;
        isOvertaken: t.BooleanC;
        identityId: typeof Units_.IdentityId;
        signature: typeof Common_.Signature;
        state: typeof State_.ItineraryState;
        startTime: typeof Units_.Time;
        endTime: typeof Units_.Time;
        co2: t.NumberC;
        fares: t.ArrayC<typeof Fare_.Fare>;
        legs: t.ArrayC<typeof Leg_.Leg>;
        productOptions: t.ArrayC<typeof ProductOption_.ProductOption>;
        type: t.UnionC<[t.LiteralC<'outward'>, t.LiteralC<'return'>]>;
        bookings: t.ArrayC<typeof Booking_.Booking>;
      }>,
      t.TypeC<{
        startTime: typeof Defined;
        endTime: typeof Defined;
        legs: typeof Defined;
      }>,
    ]
  >,
  ItineraryBrand
>;
export const Itinerary: ItineraryC = t.brand(
  t.intersection([
    t.partial({
      id: Id,
      sourcePlanId: Units_.Uuid,
      isOvertaken: t.boolean,
      identityId: Units_.IdentityId,
      signature: Common_.Signature,
      state: State_.ItineraryState,
      startTime: Units_.Time,
      endTime: Units_.Time,
      co2: t.number,
      fares: t.array(Fare_.Fare),
      legs: t.array(Leg_.Leg),
      productOptions: t.array(ProductOption_.ProductOption),
      type: t.union([t.literal('outward'), t.literal('return')]),
      bookings: t.array(Booking_.Booking),
    }),
    t.type({
      startTime: Defined,
      endTime: Defined,
      legs: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      id?: Id;
      sourcePlanId?: Units_.Uuid;
      isOvertaken?: boolean;
      identityId?: Units_.IdentityId;
      signature?: Common_.Signature;
      state?: State_.ItineraryState;
      startTime?: Units_.Time;
      endTime?: Units_.Time;
      co2?: number;
      fares?: Array<Fare_.Fare>;
      legs?: Array<Leg_.Leg>;
      productOptions?: Array<ProductOption_.ProductOption>;
      type?: 'outward' | 'return';
      bookings?: Array<Booking_.Booking>;
    } & {
      startTime: Defined;
      endTime: Defined;
      legs: Defined;
    },
    ItineraryBrand
  > => true,
  'Itinerary',
);
export interface ItineraryBrand {
  readonly Itinerary: unique symbol;
}

export default Itinerary;

// Success
