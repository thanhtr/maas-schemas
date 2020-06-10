/*

undefined
MaaS customer schema

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Units_ from '../../core/components/units';
import * as PersonalData_ from './personalData';
import * as PaymentSource_ from './payment-sources/paymentSource';
import * as Fare_ from '../../core/components/fare';
import * as Region_ from '../../core/region';
import * as Authorization_ from '../../core/components/authorization';
import * as PersonalDocument_ from '../../core/personal-document';
import * as Common_ from '../../core/components/common';
import * as VirtualCard_ from './virtual-cards/virtualCard';

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

export const schemaId = 'http://maasglobal.com/maas-backend/customers/customer.json';

// Customer
// The default export. More information at the top.
export type Customer = t.Branded<
  {
    identityId?: Units_.IdentityId;
    profileImageUrl?: string;
    personalData?: PersonalData_.PersonalData;
    paymentSources?: Array<PaymentSource_.PaymentSource>;
    balances?: Array<Fare_.Fare>;
    region?: Region_.Region;
    authorizations?: Array<Authorization_.Authorization>;
    favoriteLocations?: Array<{}>;
    personalDocuments?: Array<
      {
        type?: PersonalDocument_.DocumentType;
        status?: PersonalDocument_.DocumentStatus;
      } & {
        type: Defined;
        status: Defined;
      }
    >;
    personalDocumentConsents?: Array<Common_.AgencyId>;
    virtualCards?: Array<VirtualCard_.VirtualCard>;
  } & {
    personalData: Defined;
    paymentSources: Defined;
    balances: Defined;
    region: Defined;
    authorizations: Defined;
  },
  CustomerBrand
>;
export const Customer = t.brand(
  t.intersection([
    t.partial({
      identityId: Units_.IdentityId,
      profileImageUrl: t.string,
      personalData: PersonalData_.PersonalData,
      paymentSources: t.array(PaymentSource_.PaymentSource),
      balances: t.array(Fare_.Fare),
      region: Region_.Region,
      authorizations: t.array(Authorization_.Authorization),
      favoriteLocations: t.array(t.type({})),
      personalDocuments: t.array(
        t.intersection([
          t.partial({
            type: PersonalDocument_.DocumentType,
            status: PersonalDocument_.DocumentStatus,
          }),
          t.type({
            type: Defined,
            status: Defined,
          }),
        ]),
      ),
      personalDocumentConsents: t.array(Common_.AgencyId),
      virtualCards: t.array(VirtualCard_.VirtualCard),
    }),
    t.type({
      personalData: Defined,
      paymentSources: Defined,
      balances: Defined,
      region: Defined,
      authorizations: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_.IdentityId;
      profileImageUrl?: string;
      personalData?: PersonalData_.PersonalData;
      paymentSources?: Array<PaymentSource_.PaymentSource>;
      balances?: Array<Fare_.Fare>;
      region?: Region_.Region;
      authorizations?: Array<Authorization_.Authorization>;
      favoriteLocations?: Array<{}>;
      personalDocuments?: Array<
        {
          type?: PersonalDocument_.DocumentType;
          status?: PersonalDocument_.DocumentStatus;
        } & {
          type: Defined;
          status: Defined;
        }
      >;
      personalDocumentConsents?: Array<Common_.AgencyId>;
      virtualCards?: Array<VirtualCard_.VirtualCard>;
    } & {
      personalData: Defined;
      paymentSources: Defined;
      balances: Defined;
      region: Defined;
      authorizations: Defined;
    },
    CustomerBrand
  > => true,
  'Customer',
);
export interface CustomerBrand {
  readonly Customer: unique symbol;
}

export default Customer;

// Success
