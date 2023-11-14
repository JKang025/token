import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core'
import Oas from 'oas';
import APICore from 'api/dist/core';
import definition from './openapi.json';

class SDK {
  spec: Oas;
  core: APICore;

  constructor() {
    this.spec = Oas.init(definition);
    this.core = new APICore(this.spec, 'payswifter/2.0 (api/6.1.1)');
  }

  /**
   * Optionally configure various options that the SDK allows.
   *
   * @param config Object of supported SDK options and toggles.
   * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
   * should be represented in milliseconds.
   */
  config(config: ConfigOptions) {
    this.core.setConfig(config);
  }

  /**
   * If the API you're using requires authentication you can supply the required credentials
   * through this method and the library will magically determine how they should be used
   * within your API request.
   *
   * With the exception of OpenID and MutualTLS, it supports all forms of authentication
   * supported by the OpenAPI specification.
   *
   * @example <caption>HTTP Basic auth</caption>
   * sdk.auth('username', 'password');
   *
   * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
   * sdk.auth('myBearerToken');
   *
   * @example <caption>API Keys</caption>
   * sdk.auth('myApiKey');
   *
   * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
   * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
   * @param values Your auth credentials for the API; can specify up to two strings or numbers.
   */
  auth(...values: string[] | number[]) {
    this.core.setAuth(...values);
    return this;
  }

  /**
   * If the API you're using offers alternate server URLs, and server variables, you can tell
   * the SDK which one to use with this method. To use it you can supply either one of the
   * server URLs that are contained within the OpenAPI definition (along with any server
   * variables), or you can pass it a fully qualified URL to use (that may or may not exist
   * within the OpenAPI definition).
   *
   * @example <caption>Server URL with server variables</caption>
   * sdk.server('https://{region}.api.example.com/{basePath}', {
   *   name: 'eu',
   *   basePath: 'v14',
   * });
   *
   * @example <caption>Fully qualified server URL</caption>
   * sdk.server('https://eu.api.example.com/v14');
   *
   * @param url Server URL
   * @param variables An object of variables to replace into the server URL.
   */
  server(url: string, variables = {}) {
    this.core.setServer(url, variables);
  }

  /**
   * Get Charge
   *
   * @throws FetchError<400, types.GetChargeResponse400> Not Found
   * @throws FetchError<401, types.GetChargeResponse401> Authentication error
   * @throws FetchError<403, types.GetChargeResponse403> Does not have permission
   * @throws FetchError<422, types.GetChargeResponse422> Validation Error
   */
  get_charge(metadata: types.GetChargeMetadataParam): Promise<FetchResponse<200, types.GetChargeResponse200>> {
    return this.core.fetch('/charges/{charge_id}', 'get', metadata);
  }

  /**
   * List Charges
   *
   * @throws FetchError<401, types.ListChargesResponse401> Authentication error
   * @throws FetchError<403, types.ListChargesResponse403> Does not have permission
   * @throws FetchError<422, types.ListChargesResponse422> Validation Error
   */
  list_charges(metadata?: types.ListChargesMetadataParam): Promise<FetchResponse<200, types.ListChargesResponse200>> {
    return this.core.fetch('/charges', 'get', metadata);
  }

  /**
   * Get all orders
   *
   * @summary List Orders
   * @throws FetchError<401, types.ListOrdersResponse401> Authentication error
   * @throws FetchError<403, types.ListOrdersResponse403> Does not have permission
   * @throws FetchError<422, types.ListOrdersResponse422> Validation Error
   */
  list_orders(metadata?: types.ListOrdersMetadataParam): Promise<FetchResponse<200, types.ListOrdersResponse200>> {
    return this.core.fetch('/orders', 'get', metadata);
  }

  /**
   * Create an order
   *
   * @summary Create Order
   * @throws FetchError<400, types.CreateOrderResponse400> Not Found
   * @throws FetchError<401, types.CreateOrderResponse401> Authentication error
   * @throws FetchError<422, types.CreateOrderResponse422> Validation Error
   */
  create_order(body: types.CreateOrderBodyParam): Promise<FetchResponse<201, types.CreateOrderResponse201>> {
    return this.core.fetch('/orders', 'post', body);
  }

  /**
   * Cancel Order By Id
   *
   * @throws FetchError<400, types.CancelOrderResponse400> Not Found
   * @throws FetchError<401, types.CancelOrderResponse401> Authentication error
   * @throws FetchError<422, types.CancelOrderResponse422> Validation Error
   */
  cancel_order(metadata: types.CancelOrderMetadataParam): Promise<FetchResponse<200, types.CancelOrderResponse200>> {
    return this.core.fetch('/orders/{order_id}/cancel', 'put', metadata);
  }

  /**
   * Charge Order By Id
   *
   * @throws FetchError<400, types.ChargeOrderResponse400> Not Found
   * @throws FetchError<401, types.ChargeOrderResponse401> Authentication error
   * @throws FetchError<422, types.ChargeOrderResponse422> Validation Error
   */
  charge_order(metadata: types.ChargeOrderMetadataParam): Promise<FetchResponse<200, types.ChargeOrderResponse200>> {
    return this.core.fetch('/orders/{order_id}/charge', 'post', metadata);
  }

  /**
   * Get order by order id
   *
   * @summary Get Order
   * @throws FetchError<400, types.GetOrderResponse400> Not Found
   * @throws FetchError<401, types.GetOrderResponse401> Authentication error
   * @throws FetchError<403, types.GetOrderResponse403> Does not have permission
   * @throws FetchError<422, types.GetOrderResponse422> Validation Error
   */
  get_order(metadata: types.GetOrderMetadataParam): Promise<FetchResponse<200, types.GetOrderResponse200>> {
    return this.core.fetch('/orders/{order_id}', 'get', metadata);
  }

  /**
   * List Payment Links
   *
   * @throws FetchError<401, types.ListPaymentLinksResponse401> Authentication error
   * @throws FetchError<403, types.ListPaymentLinksResponse403> Does not have permission
   * @throws FetchError<422, types.ListPaymentLinksResponse422> Validation Error
   */
  list_payment_links(metadata?: types.ListPaymentLinksMetadataParam): Promise<FetchResponse<200, types.ListPaymentLinksResponse200>> {
    return this.core.fetch('/payment_links', 'get', metadata);
  }

  /**
   * Create Payment Link
   *
   * @throws FetchError<400, types.CreatePaymentLinkResponse400> Not Found
   * @throws FetchError<401, types.CreatePaymentLinkResponse401> Authentication error
   * @throws FetchError<403, types.CreatePaymentLinkResponse403> Does not have permission
   * @throws FetchError<422, types.CreatePaymentLinkResponse422> Validation Error
   */
  create_payment_link(body: types.CreatePaymentLinkBodyParam): Promise<FetchResponse<200, types.CreatePaymentLinkResponse200>> {
    return this.core.fetch('/payment_links', 'post', body);
  }

  /**
   * Delete Payment Link
   *
   * @throws FetchError<400, types.DeletePaymentLinkResponse400> Not Found
   * @throws FetchError<401, types.DeletePaymentLinkResponse401> Authentication error
   * @throws FetchError<403, types.DeletePaymentLinkResponse403> Does not have permission
   * @throws FetchError<422, types.DeletePaymentLinkResponse422> Validation Error
   */
  delete_payment_link(metadata: types.DeletePaymentLinkMetadataParam): Promise<FetchResponse<200, types.DeletePaymentLinkResponse200>> {
    return this.core.fetch('/payment_links/{payment_link_id}', 'delete', metadata);
  }

  /**
   * List Sessions
   *
   * @throws FetchError<401, types.ListSessionsResponse401> Authentication error
   * @throws FetchError<403, types.ListSessionsResponse403> Does not have permission
   * @throws FetchError<422, types.ListSessionsResponse422> Validation Error
   */
  list_sessions(metadata?: types.ListSessionsMetadataParam): Promise<FetchResponse<200, types.ListSessionsResponse200>> {
    return this.core.fetch('/sessions', 'get', metadata);
  }

  /**
   * Create a checkout session
   *
   * @summary Create a Session
   * @throws FetchError<400, types.CreateSessionResponse400> Not Found
   * @throws FetchError<401, types.CreateSessionResponse401> Authentication error
   * @throws FetchError<403, types.CreateSessionResponse403> Does not have permission
   * @throws FetchError<422, types.CreateSessionResponse422> Validation Error
   */
  create_session(body: types.CreateSessionBodyParam): Promise<FetchResponse<201, types.CreateSessionResponse201>> {
    return this.core.fetch('/sessions', 'post', body);
  }

  /**
   * Retrieve session info by id
   *
   * @summary Retrieve a Session
   * @throws FetchError<400, types.GetSessionResponse400> Not Found
   * @throws FetchError<401, types.GetSessionResponse401> Authentication error
   * @throws FetchError<403, types.GetSessionResponse403> Does not have permission
   * @throws FetchError<422, types.GetSessionResponse422> Validation Error
   */
  get_session(metadata: types.GetSessionMetadataParam): Promise<FetchResponse<200, types.GetSessionResponse200>> {
    return this.core.fetch('/sessions/{session_id}', 'get', metadata);
  }

  /**
   * List Webhooks
   *
   * @throws FetchError<401, types.ListWebhooksResponse401> Authentication error
   * @throws FetchError<403, types.ListWebhooksResponse403> Does not have permission
   * @throws FetchError<422, types.ListWebhooksResponse422> Validation Error
   */
  list_webhooks(metadata?: types.ListWebhooksMetadataParam): Promise<FetchResponse<200, types.ListWebhooksResponse200>> {
    return this.core.fetch('/webhooks', 'get', metadata);
  }

  /**
   * Create Webhook
   *
   * @throws FetchError<401, types.CreateWebhookResponse401> Authentication error
   * @throws FetchError<403, types.CreateWebhookResponse403> Does not have permission
   * @throws FetchError<422, types.CreateWebhookResponse422> Validation Error
   */
  create_webhook(body: types.CreateWebhookBodyParam): Promise<FetchResponse<201, types.CreateWebhookResponse201>> {
    return this.core.fetch('/webhooks', 'post', body);
  }

  /**
   * Get Webhook
   *
   * @throws FetchError<400, types.GetWebhookResponse400> Not Found
   * @throws FetchError<401, types.GetWebhookResponse401> Authentication error
   * @throws FetchError<403, types.GetWebhookResponse403> Does not have permission
   * @throws FetchError<422, types.GetWebhookResponse422> Validation Error
   */
  get_webhook(metadata: types.GetWebhookMetadataParam): Promise<FetchResponse<200, types.GetWebhookResponse200>> {
    return this.core.fetch('/webhooks/{webhook_id}', 'get', metadata);
  }

  /**
   * Delete Webhook
   *
   * @throws FetchError<400, types.DeleteWebhookResponse400> Not Found
   * @throws FetchError<401, types.DeleteWebhookResponse401> Authentication error
   * @throws FetchError<403, types.DeleteWebhookResponse403> Does not have permission
   * @throws FetchError<422, types.DeleteWebhookResponse422> Validation Error
   */
  delete_webhook(metadata: types.DeleteWebhookMetadataParam): Promise<FetchResponse<200, types.DeleteWebhookResponse200>> {
    return this.core.fetch('/webhooks/{webhook_id}', 'delete', metadata);
  }

  /**
   * Update Webhook
   *
   * @throws FetchError<400, types.UpdateWebhookResponse400> Not Found
   * @throws FetchError<401, types.UpdateWebhookResponse401> Authentication error
   * @throws FetchError<403, types.UpdateWebhookResponse403> Does not have permission
   * @throws FetchError<422, types.UpdateWebhookResponse422> Validation Error
   */
  update_webhook(body: types.UpdateWebhookBodyParam, metadata: types.UpdateWebhookMetadataParam): Promise<FetchResponse<200, types.UpdateWebhookResponse200>> {
    return this.core.fetch('/webhooks/{webhook_id}', 'patch', body, metadata);
  }

  /**
   * Get Webhook Deliveries
   *
   * @throws FetchError<400, types.ListWebhookDeliveriesResponse400> Not Found
   * @throws FetchError<401, types.ListWebhookDeliveriesResponse401> Authentication error
   * @throws FetchError<403, types.ListWebhookDeliveriesResponse403> Does not have permission
   * @throws FetchError<422, types.ListWebhookDeliveriesResponse422> Validation Error
   */
  list_webhook_deliveries(metadata: types.ListWebhookDeliveriesMetadataParam): Promise<FetchResponse<200, types.ListWebhookDeliveriesResponse200>> {
    return this.core.fetch('/webhooks/{webhook_id}/deliveries', 'get', metadata);
  }
}

const createSDK = (() => { return new SDK(); })()
;

export default createSDK;

export type { CancelOrderMetadataParam, CancelOrderResponse200, CancelOrderResponse400, CancelOrderResponse401, CancelOrderResponse422, ChargeOrderMetadataParam, ChargeOrderResponse200, ChargeOrderResponse400, ChargeOrderResponse401, ChargeOrderResponse422, CreateOrderBodyParam, CreateOrderResponse201, CreateOrderResponse400, CreateOrderResponse401, CreateOrderResponse422, CreatePaymentLinkBodyParam, CreatePaymentLinkResponse200, CreatePaymentLinkResponse400, CreatePaymentLinkResponse401, CreatePaymentLinkResponse403, CreatePaymentLinkResponse422, CreateSessionBodyParam, CreateSessionResponse201, CreateSessionResponse400, CreateSessionResponse401, CreateSessionResponse403, CreateSessionResponse422, CreateWebhookBodyParam, CreateWebhookResponse201, CreateWebhookResponse401, CreateWebhookResponse403, CreateWebhookResponse422, DeletePaymentLinkMetadataParam, DeletePaymentLinkResponse200, DeletePaymentLinkResponse400, DeletePaymentLinkResponse401, DeletePaymentLinkResponse403, DeletePaymentLinkResponse422, DeleteWebhookMetadataParam, DeleteWebhookResponse200, DeleteWebhookResponse400, DeleteWebhookResponse401, DeleteWebhookResponse403, DeleteWebhookResponse422, GetChargeMetadataParam, GetChargeResponse200, GetChargeResponse400, GetChargeResponse401, GetChargeResponse403, GetChargeResponse422, GetOrderMetadataParam, GetOrderResponse200, GetOrderResponse400, GetOrderResponse401, GetOrderResponse403, GetOrderResponse422, GetSessionMetadataParam, GetSessionResponse200, GetSessionResponse400, GetSessionResponse401, GetSessionResponse403, GetSessionResponse422, GetWebhookMetadataParam, GetWebhookResponse200, GetWebhookResponse400, GetWebhookResponse401, GetWebhookResponse403, GetWebhookResponse422, ListChargesMetadataParam, ListChargesResponse200, ListChargesResponse401, ListChargesResponse403, ListChargesResponse422, ListOrdersMetadataParam, ListOrdersResponse200, ListOrdersResponse401, ListOrdersResponse403, ListOrdersResponse422, ListPaymentLinksMetadataParam, ListPaymentLinksResponse200, ListPaymentLinksResponse401, ListPaymentLinksResponse403, ListPaymentLinksResponse422, ListSessionsMetadataParam, ListSessionsResponse200, ListSessionsResponse401, ListSessionsResponse403, ListSessionsResponse422, ListWebhookDeliveriesMetadataParam, ListWebhookDeliveriesResponse200, ListWebhookDeliveriesResponse400, ListWebhookDeliveriesResponse401, ListWebhookDeliveriesResponse403, ListWebhookDeliveriesResponse422, ListWebhooksMetadataParam, ListWebhooksResponse200, ListWebhooksResponse401, ListWebhooksResponse403, ListWebhooksResponse422, UpdateWebhookBodyParam, UpdateWebhookMetadataParam, UpdateWebhookResponse200, UpdateWebhookResponse400, UpdateWebhookResponse401, UpdateWebhookResponse403, UpdateWebhookResponse422 } from './types';
