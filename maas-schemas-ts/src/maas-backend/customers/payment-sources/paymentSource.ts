/*

undefined
MaaS payment source schema

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Station_ from 'maas-schemas-ts/core/components/station';
import * as Address_ from 'maas-schemas-ts/core/components/address';

type Defined =
  | Record<string, unknown>
  | Array<unknown>
  | string
  | boolean
  | number
  | null;
const Defined = t.union([
  t.UnknownRecord,
  t.UnknownArray,
  t.string,
  t.boolean,
  t.number,
  t.null,
]);

export const schemaId =
  'http://maasglobal.com/maas-backend/customers/payment-sources/paymentSource.json';

// PaymentSourceId
// The purpose of this remains a mystery
export type PaymentSourceId = t.Branded<string, PaymentSourceIdBrand>;
export const PaymentSourceId = t.brand(
  t.string,
  (x): x is t.Branded<string, PaymentSourceIdBrand> =>
    typeof x !== 'string' || x.length >= 2,
  'PaymentSourceId',
);
export interface PaymentSourceIdBrand {
  readonly PaymentSourceId: unique symbol;
}

// GatewayName
// The purpose of this remains a mystery
export type GatewayName = t.Branded<string, GatewayNameBrand>;
export const GatewayName = t.brand(
  t.string,
  (x): x is t.Branded<string, GatewayNameBrand> =>
    (typeof x !== 'string' || x.length >= 3) &&
    (typeof x !== 'string' || x.length <= 255),
  'GatewayName',
);
export interface GatewayNameBrand {
  readonly GatewayName: unique symbol;
}

// Type
// The purpose of this remains a mystery
export type Type = t.Branded<string, TypeBrand>;
export const Type = t.brand(
  t.string,
  (x): x is t.Branded<string, TypeBrand> =>
    (typeof x !== 'string' || x.length >= 3) &&
    (typeof x !== 'string' || x.length <= 100),
  'Type',
);
export interface TypeBrand {
  readonly Type: unique symbol;
}

// Alias
// The purpose of this remains a mystery
export type Alias = t.Branded<string, AliasBrand>;
export const Alias = t.brand(
  t.string,
  (x): x is t.Branded<string, AliasBrand> =>
    (typeof x !== 'string' || x.length >= 3) &&
    (typeof x !== 'string' || x.length <= 100),
  'Alias',
);
export interface AliasBrand {
  readonly Alias: unique symbol;
}

// Status
// The purpose of this remains a mystery
export type Status = t.Branded<string, StatusBrand>;
export const Status = t.brand(
  t.string,
  (x): x is t.Branded<string, StatusBrand> =>
    (typeof x !== 'string' || x.length >= 2) &&
    (typeof x !== 'string' || x.length <= 255),
  'Status',
);
export interface StatusBrand {
  readonly Status: unique symbol;
}

// SetupIntentId
// The purpose of this remains a mystery
export type SetupIntentId = t.Branded<string, SetupIntentIdBrand>;
export const SetupIntentId = t.brand(
  t.string,
  (x): x is t.Branded<string, SetupIntentIdBrand> =>
    (typeof x !== 'string' || x.length >= 2) &&
    (typeof x !== 'string' || x.length <= 255),
  'SetupIntentId',
);
export interface SetupIntentIdBrand {
  readonly SetupIntentId: unique symbol;
}

// PaymentSource
// The default export. More information at the top.
export type PaymentSource = t.Branded<unknown, PaymentSourceBrand>;
export const PaymentSource = t.brand(
  t.unknown,
  (x): x is t.Branded<unknown, PaymentSourceBrand> => true,
  'PaymentSource',
);
export interface PaymentSourceBrand {
  readonly PaymentSource: unique symbol;
}

export default PaymentSource;

// Success