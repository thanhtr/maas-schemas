/*

undefined
Request schema for stations list

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Units_ from '../../../core/components/units';
import * as Common_ from '../../../core/components/common';
import * as UnitsGeo_ from '../../../core/components/units-geo';
import * as ApiCommon_ from '../../../core/components/api-common';

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

export const schemaId =
  'http://maasglobal.com/maas-backend/stations/stations-list/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    identityId?: Units_.IdentityId;
    agencyId?: Common_.AgencyId;
    payload?:
      | ({
          lat?: UnitsGeo_.RelaxedLatitude;
          lon?: UnitsGeo_.RelaxedLatitude;
          radius?: number;
          type?: 'origin' | 'destination' | 'viaAvoid';
        } & {
          lat: Defined;
          lon: Defined;
          type: Defined;
        })
      | ({
          agencyId?: Common_.AgencyId;
          name?: string;
          count?: number;
          type?: 'origin' | 'destination' | 'viaAvoid';
        } & {
          name: Defined;
          count: Defined;
          type: Defined;
        });
    headers?: ApiCommon_.Headers;
  } & {
    identityId: Defined;
    agencyId: Defined;
    payload: Defined;
  },
  RequestBrand
>;
export type RequestC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        identityId: typeof Units_.IdentityId;
        agencyId: typeof Common_.AgencyId;
        payload: t.UnionC<
          [
            t.IntersectionC<
              [
                t.PartialC<{
                  lat: typeof UnitsGeo_.RelaxedLatitude;
                  lon: typeof UnitsGeo_.RelaxedLatitude;
                  radius: t.NumberC;
                  type: t.UnionC<
                    [
                      t.LiteralC<'origin'>,
                      t.LiteralC<'destination'>,
                      t.LiteralC<'viaAvoid'>,
                    ]
                  >;
                }>,
                t.TypeC<{
                  lat: typeof Defined;
                  lon: typeof Defined;
                  type: typeof Defined;
                }>,
              ]
            >,
            t.IntersectionC<
              [
                t.PartialC<{
                  agencyId: typeof Common_.AgencyId;
                  name: t.StringC;
                  count: t.NumberC;
                  type: t.UnionC<
                    [
                      t.LiteralC<'origin'>,
                      t.LiteralC<'destination'>,
                      t.LiteralC<'viaAvoid'>,
                    ]
                  >;
                }>,
                t.TypeC<{
                  name: typeof Defined;
                  count: typeof Defined;
                  type: typeof Defined;
                }>,
              ]
            >,
          ]
        >;
        headers: typeof ApiCommon_.Headers;
      }>,
      t.TypeC<{
        identityId: typeof Defined;
        agencyId: typeof Defined;
        payload: typeof Defined;
      }>,
    ]
  >,
  RequestBrand
>;
export const Request: RequestC = t.brand(
  t.intersection([
    t.partial({
      identityId: Units_.IdentityId,
      agencyId: Common_.AgencyId,
      payload: t.union([
        t.intersection([
          t.partial({
            lat: UnitsGeo_.RelaxedLatitude,
            lon: UnitsGeo_.RelaxedLatitude,
            radius: t.number,
            type: t.union([
              t.literal('origin'),
              t.literal('destination'),
              t.literal('viaAvoid'),
            ]),
          }),
          t.type({
            lat: Defined,
            lon: Defined,
            type: Defined,
          }),
        ]),
        t.intersection([
          t.partial({
            agencyId: Common_.AgencyId,
            name: t.string,
            count: t.number,
            type: t.union([
              t.literal('origin'),
              t.literal('destination'),
              t.literal('viaAvoid'),
            ]),
          }),
          t.type({
            name: Defined,
            count: Defined,
            type: Defined,
          }),
        ]),
      ]),
      headers: ApiCommon_.Headers,
    }),
    t.type({
      identityId: Defined,
      agencyId: Defined,
      payload: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_.IdentityId;
      agencyId?: Common_.AgencyId;
      payload?:
        | ({
            lat?: UnitsGeo_.RelaxedLatitude;
            lon?: UnitsGeo_.RelaxedLatitude;
            radius?: number;
            type?: 'origin' | 'destination' | 'viaAvoid';
          } & {
            lat: Defined;
            lon: Defined;
            type: Defined;
          })
        | ({
            agencyId?: Common_.AgencyId;
            name?: string;
            count?: number;
            type?: 'origin' | 'destination' | 'viaAvoid';
          } & {
            name: Defined;
            count: Defined;
            type: Defined;
          });
      headers?: ApiCommon_.Headers;
    } & {
      identityId: Defined;
      agencyId: Defined;
      payload: Defined;
    },
    RequestBrand
  > => true,
  'Request',
);
export interface RequestBrand {
  readonly Request: unique symbol;
}

export default Request;

// Success
