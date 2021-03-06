/*

undefined
KycService object

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as PersonalDocument_ from './personal-document';

export const schemaId = 'http://maasglobal.com/core/kyc-service.json';

// KycService
// The default export. More information at the top.
export type KycService = t.Branded<
  {
    id?: string;
    supportedDocumentTypes?: Array<PersonalDocument_.DocumentType>;
    supportedDocumentCategories?: Record<string, unknown>;
  },
  KycServiceBrand
>;
export type KycServiceC = t.BrandC<
  t.PartialC<{
    id: t.StringC;
    supportedDocumentTypes: t.ArrayC<typeof PersonalDocument_.DocumentType>;
    supportedDocumentCategories: t.UnknownRecordC;
  }>,
  KycServiceBrand
>;
export const KycService: KycServiceC = t.brand(
  t.partial({
    id: t.string,
    supportedDocumentTypes: t.array(PersonalDocument_.DocumentType),
    supportedDocumentCategories: t.UnknownRecord,
  }),
  (
    x,
  ): x is t.Branded<
    {
      id?: string;
      supportedDocumentTypes?: Array<PersonalDocument_.DocumentType>;
      supportedDocumentCategories?: Record<string, unknown>;
    },
    KycServiceBrand
  > => true,
  'KycService',
);
export interface KycServiceBrand {
  readonly KycService: unique symbol;
}

export default KycService;

// Success
