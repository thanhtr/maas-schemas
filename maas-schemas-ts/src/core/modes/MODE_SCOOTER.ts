/*

undefined
undefined

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

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

export const schemaId = 'http://maasglobal.com/core/modes/MODE_SCOOTER.json';

// MODE_SCOOTER
// The default export. More information at the top.
export type MODE_SCOOTER = t.Branded<
  {
    scooter?: {
      id?: string;
    } & {
      id: Defined;
    };
  },
  MODE_SCOOTERBrand
>;
export type MODE_SCOOTERC = t.BrandC<
  t.PartialC<{
    scooter: t.IntersectionC<
      [
        t.PartialC<{
          id: t.StringC;
        }>,
        t.TypeC<{
          id: typeof Defined;
        }>,
      ]
    >;
  }>,
  MODE_SCOOTERBrand
>;
export const MODE_SCOOTER: MODE_SCOOTERC = t.brand(
  t.partial({
    scooter: t.intersection([
      t.partial({
        id: t.string,
      }),
      t.type({
        id: Defined,
      }),
    ]),
  }),
  (
    x,
  ): x is t.Branded<
    {
      scooter?: {
        id?: string;
      } & {
        id: Defined;
      };
    },
    MODE_SCOOTERBrand
  > => true,
  'MODE_SCOOTER',
);
export interface MODE_SCOOTERBrand {
  readonly MODE_SCOOTER: unique symbol;
}

export default MODE_SCOOTER;

// Success
