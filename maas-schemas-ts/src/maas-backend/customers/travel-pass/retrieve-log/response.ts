/*

undefined
Retrieve logs response

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as TravelPassLog_ from '../../../core/travel-pass-log';

export const schemaId =
  'http://maasglobal.com/maas-backend/customers/travel-pass/retrieve-log/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    travelPassLogs?: Array<TravelPassLog_.TravelPassLog>;
  },
  ResponseBrand
>;
export type ResponseC = t.BrandC<
  t.PartialC<{
    travelPassLogs: t.ArrayC<typeof TravelPassLog_.TravelPassLog>;
  }>,
  ResponseBrand
>;
export const Response: ResponseC = t.brand(
  t.partial({
    travelPassLogs: t.array(TravelPassLog_.TravelPassLog),
  }),
  (
    x,
  ): x is t.Branded<
    {
      travelPassLogs?: Array<TravelPassLog_.TravelPassLog>;
    },
    ResponseBrand
  > => true,
  'Response',
);
export interface ResponseBrand {
  readonly Response: unique symbol;
}

export default Response;

// Success
