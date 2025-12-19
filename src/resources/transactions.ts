// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Transactions extends APIResource {
  /**
   * Retrieves detailed information about a specific transaction, including merchant
   * details and location.
   */
  retrieve(transactionID: string, options?: RequestOptions): APIPromise<Transaction> {
    return this._client.get(path`/transactions/${transactionID}`, options);
  }

  /**
   * Retrieves a paginated list of transactions across all accounts, with extensive
   * filtering options for analysis.
   */
  list(
    query: TransactionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TransactionListResponse> {
    return this._client.get('/transactions', { query, ...options });
  }

  /**
   * Starts a dispute process for a specific transaction.
   */
  dispute(
    transactionID: string,
    body: TransactionDisputeParams,
    options?: RequestOptions,
  ): APIPromise<TransactionDisputeResponse> {
    return this._client.post(path`/transactions/${transactionID}/dispute`, { body, ...options });
  }
}

/**
 * Represents a financial transaction.
 */
export interface Transaction {
  id: string;

  accountId: string;

  amount: number;

  category: string;

  currency: string;

  date: string;

  description: string;

  type: 'income' | 'expense' | 'transfer' | 'investment' | 'refund' | 'bill_payment';

  aiCategoryConfidence?: number | null;

  carbonFootprint?: number | null;

  disputeStatus?: 'none' | 'pending' | 'under_review' | 'resolved' | 'rejected';

  /**
   * Geographic location of a transaction.
   */
  location?: Transaction.Location;

  /**
   * Details about a merchant.
   */
  merchantDetails?: Transaction.MerchantDetails;

  notes?: string | null;

  paymentChannel?: 'in_store' | 'online' | 'mobile' | 'atm' | 'bill_payment' | 'transfer' | 'other' | null;

  postedDate?: string | null;

  receiptUrl?: string | null;

  tags?: Array<string> | null;
}

export namespace Transaction {
  /**
   * Geographic location of a transaction.
   */
  export interface Location {
    city?: string | null;

    latitude?: number;

    longitude?: number;

    state?: string | null;

    zip?: string | null;
  }

  /**
   * Details about a merchant.
   */
  export interface MerchantDetails {
    /**
     * Physical address structure.
     */
    address?: MerchantDetails.Address;

    logoUrl?: string | null;

    name?: string;

    phone?: string | null;

    website?: string | null;
  }

  export namespace MerchantDetails {
    /**
     * Physical address structure.
     */
    export interface Address {
      city?: string;

      country?: string;

      state?: string;

      street?: string;

      zip?: string;
    }
  }
}

/**
 * Paginated list of transactions.
 */
export interface TransactionListResponse {
  /**
   * Indicates if there are more pages available.
   */
  hasNextPage: boolean;

  data?: Array<Transaction>;

  /**
   * Cursor to use for the next page request.
   */
  endCursor?: string | null;
}

/**
 * Status of a dispute.
 */
export interface TransactionDisputeResponse {
  disputeId: string;

  lastUpdated: string;

  nextSteps: string;

  status: 'pending' | 'under_review' | 'requires_more_info' | 'resolved' | 'rejected';
}

export interface TransactionListParams {
  /**
   * Cursor for the next page of results.
   */
  after?: string;

  /**
   * Filter by transaction category.
   */
  category?: string;

  /**
   * Filter transactions before this date.
   */
  endDate?: string;

  /**
   * Maximum number of items to return.
   */
  limit?: number;

  /**
   * Maximum transaction amount.
   */
  maxAmount?: number;

  /**
   * Minimum transaction amount.
   */
  minAmount?: number;

  /**
   * Text search on description or merchant name.
   */
  searchQuery?: string;

  /**
   * Filter transactions after this date.
   */
  startDate?: string;

  /**
   * Filter by transaction type.
   */
  type?: 'income' | 'expense' | 'transfer' | 'investment' | 'refund' | 'bill_payment';
}

export interface TransactionDisputeParams {
  details: string;

  reason: 'unauthorized' | 'duplicate_charge' | 'incorrect_amount' | 'product_service_issue' | 'other';

  supportingDocuments?: Array<string> | null;
}

export declare namespace Transactions {
  export {
    type Transaction as Transaction,
    type TransactionListResponse as TransactionListResponse,
    type TransactionDisputeResponse as TransactionDisputeResponse,
    type TransactionListParams as TransactionListParams,
    type TransactionDisputeParams as TransactionDisputeParams,
  };
}
