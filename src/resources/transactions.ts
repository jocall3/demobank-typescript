// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Transactions extends APIResource {
  /**
   * Retrieves granular information for a single transaction by its unique ID,
   * including AI categorization confidence, merchant details, and associated carbon
   * footprint.
   *
   * @example
   * ```ts
   * const transaction = await client.transactions.retrieve(
   *   'txn_quantum-2024-07-21-A7B8C9',
   * );
   * ```
   */
  retrieve(transactionID: string, options?: RequestOptions): APIPromise<TransactionRetrieveResponse> {
    return this._client.get(path`/transactions/${transactionID}`, options);
  }

  /**
   * Retrieves a paginated list of the user's transactions, with extensive options
   * for filtering by type, category, date range, amount, and intelligent AI-driven
   * sorting and search capabilities.
   *
   * @example
   * ```ts
   * const transactions = await client.transactions.list();
   * ```
   */
  list(
    query: TransactionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TransactionListResponse> {
    return this._client.get('/transactions', { query, ...options });
  }

  /**
   * Allows the user to override or refine the AI's categorization for a transaction,
   * improving future AI accuracy and personal financial reporting.
   *
   * @example
   * ```ts
   * const response = await client.transactions.categorize(
   *   'txn_quantum-2024-07-21-A7B8C9',
   *   {
   *     category: 'Home > Groceries',
   *     applyToFuture: true,
   *     notes: 'Bulk purchase for party',
   *   },
   * );
   * ```
   */
  categorize(
    transactionID: string,
    body: TransactionCategorizeParams,
    options?: RequestOptions,
  ): APIPromise<TransactionCategorizeResponse> {
    return this._client.put(path`/transactions/${transactionID}/categorize`, { body, ...options });
  }
}

export interface TransactionRetrieveResponse {
  id: string;

  accountId: string;

  amount: number;

  category: string;

  currency: string;

  date: string;

  description: string;

  type: string;

  aiCategoryConfidence?: number;

  carbonFootprint?: number;

  disputeStatus?: string;

  location?: TransactionRetrieveResponse.Location;

  merchantDetails?: TransactionRetrieveResponse.MerchantDetails;

  notes?: string;

  paymentChannel?: string;

  postedDate?: string;

  receiptUrl?: string;

  tags?: Array<string>;
}

export namespace TransactionRetrieveResponse {
  export interface Location {
    city?: string;

    latitude?: number;

    longitude?: number;
  }

  export interface MerchantDetails {
    address?: MerchantDetails.Address;

    logoUrl?: string;

    name?: string;

    website?: string;
  }

  export namespace MerchantDetails {
    export interface Address {
      city?: string;

      state?: string;

      zip?: string;
    }
  }
}

export interface TransactionListResponse {
  data: Array<TransactionListResponse.Data>;

  limit: number;

  offset: number;

  total: number;

  nextOffset?: number;
}

export namespace TransactionListResponse {
  export interface Data {
    id?: string;

    accountId?: string;

    aiCategoryConfidence?: number;

    amount?: number;

    carbonFootprint?: number;

    category?: string;

    currency?: string;

    date?: string;

    description?: string;

    disputeStatus?: string;

    location?: Data.Location;

    merchantDetails?: Data.MerchantDetails;

    notes?: string;

    paymentChannel?: string;

    postedDate?: string;

    receiptUrl?: string;

    tags?: Array<string>;

    type?: string;
  }

  export namespace Data {
    export interface Location {
      city?: string;

      latitude?: number;

      longitude?: number;
    }

    export interface MerchantDetails {
      address?: MerchantDetails.Address;

      logoUrl?: string;

      name?: string;

      website?: string;
    }

    export namespace MerchantDetails {
      export interface Address {
        city?: string;

        state?: string;

        zip?: string;
      }
    }
  }
}

export interface TransactionCategorizeResponse {
  id: string;

  accountId: string;

  amount: number;

  category: string;

  currency: string;

  date: string;

  description: string;

  type: string;

  aiCategoryConfidence?: number;

  carbonFootprint?: number;

  disputeStatus?: string;

  location?: TransactionCategorizeResponse.Location;

  merchantDetails?: TransactionCategorizeResponse.MerchantDetails;

  notes?: string;

  paymentChannel?: string;

  postedDate?: string;

  receiptUrl?: string;

  tags?: Array<string>;
}

export namespace TransactionCategorizeResponse {
  export interface Location {
    city?: string;

    latitude?: number;

    longitude?: number;
  }

  export interface MerchantDetails {
    address?: MerchantDetails.Address;

    logoUrl?: string;

    name?: string;

    website?: string;
  }

  export namespace MerchantDetails {
    export interface Address {
      city?: string;

      state?: string;

      zip?: string;
    }
  }
}

export interface TransactionListParams {
  /**
   * Filter transactions by their AI-assigned or user-defined category.
   */
  category?: string;

  /**
   * Retrieve transactions up to this date (inclusive).
   */
  endDate?: string;

  /**
   * Maximum number of items to return in a single page.
   */
  limit?: number;

  /**
   * Filter for transactions with an amount less than or equal to this value.
   */
  maxAmount?: number;

  /**
   * Filter for transactions with an amount greater than or equal to this value.
   */
  minAmount?: number;

  /**
   * Number of items to skip before starting to collect the result set.
   */
  offset?: number;

  /**
   * Free-text search across transaction descriptions, merchants, and notes.
   */
  searchQuery?: string;

  /**
   * Retrieve transactions from this date (inclusive).
   */
  startDate?: string;

  /**
   * Filter transactions by type (e.g., income, expense, transfer).
   */
  type?: string;
}

export interface TransactionCategorizeParams {
  category: string;

  applyToFuture?: boolean;

  notes?: string;
}

export declare namespace Transactions {
  export {
    type TransactionRetrieveResponse as TransactionRetrieveResponse,
    type TransactionListResponse as TransactionListResponse,
    type TransactionCategorizeResponse as TransactionCategorizeResponse,
    type TransactionListParams as TransactionListParams,
    type TransactionCategorizeParams as TransactionCategorizeParams,
  };
}
