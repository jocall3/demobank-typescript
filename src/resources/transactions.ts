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
  retrieve(transactionID: string, options?: RequestOptions): APIPromise<Transaction> {
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
   * const transaction = await client.transactions.categorize(
   *   'txn_quantum-2024-07-21-A7B8C9',
   *   { category: 'Business Expenses > Client Entertainment' },
   * );
   * ```
   */
  categorize(
    transactionID: string,
    body: TransactionCategorizeParams,
    options?: RequestOptions,
  ): APIPromise<Transaction> {
    return this._client.put(path`/transactions/${transactionID}/categorize`, { body, ...options });
  }

  /**
   * Begins the process of disputing a specific transaction, providing details and
   * supporting documentation for review by our compliance team and AI.
   *
   * @example
   * ```ts
   * const response = await client.transactions.dispute(
   *   'txn_quantum-2024-07-21-A7B8C9',
   *   { reason: 'unauthorized' },
   * );
   * ```
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
 * A detailed financial transaction entry with AI-enriched data.
 */
export interface Transaction {
  /**
   * Unique identifier for the transaction.
   */
  id?: string;

  /**
   * ID of the account this transaction belongs to.
   */
  accountId?: string;

  /**
   * AI's confidence score (0-1) in the assigned category.
   */
  aiCategoryConfidence?: number;

  /**
   * The transaction amount.
   */
  amount?: number;

  /**
   * Estimated carbon footprint (in kg CO2e) associated with this transaction,
   * calculated by AI.
   */
  carbonFootprint?: number | null;

  /**
   * AI-assigned or user-defined category for the transaction.
   */
  category?: string;

  /**
   * The currency of the transaction.
   */
  currency?: string;

  /**
   * The date the transaction occurred.
   */
  date?: string;

  /**
   * Raw description from the bank statement or merchant.
   */
  description?: string;

  /**
   * Current status of any dispute related to this transaction.
   */
  disputeStatus?: 'none' | 'pending' | 'under_review' | 'resolved' | 'rejected';

  /**
   * Geographic location data for the transaction, if available.
   */
  location?: Transaction.Location | null;

  /**
   * Detailed information about the merchant.
   */
  merchantDetails?: Transaction.MerchantDetails | null;

  /**
   * How the payment was made (e.g., online, in-store).
   */
  paymentChannel?: 'online' | 'in_store' | 'atm' | 'recurring_bill' | 'p2p';

  /**
   * The date the transaction was officially posted.
   */
  postedDate?: string | null;

  /**
   * URL to a digital receipt, if captured or uploaded.
   */
  receiptUrl?: string | null;

  /**
   * User-defined tags for deeper organization.
   */
  tags?: Array<string>;

  /**
   * The type of transaction (e.g., income, expense).
   */
  type?: 'income' | 'expense' | 'transfer' | 'investment' | 'refund' | 'bill_payment' | 'fee';
}

export namespace Transaction {
  /**
   * Geographic location data for the transaction, if available.
   */
  export interface Location {
    city?: string;

    latitude?: number;

    longitude?: number;
  }

  /**
   * Detailed information about the merchant.
   */
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

/**
 * A paginated list structure for transactions.
 */
export interface TransactionListResponse {
  data?: Array<Transaction>;

  limit?: number;

  /**
   * The offset to use for the next page of results, if available.
   */
  nextOffset?: number | null;

  offset?: number;

  /**
   * The offset for the previous page of results, if available.
   */
  prevOffset?: number | null;

  total?: number;
}

/**
 * Current status of a transaction dispute.
 */
export interface TransactionDisputeResponse {
  /**
   * Unique identifier for the dispute case.
   */
  disputeId: string;

  /**
   * Current status of the dispute.
   */
  status:
    | 'pending'
    | 'under_review'
    | 'documentation_requested'
    | 'resolved_favorable'
    | 'resolved_unfavorable'
    | 'closed';

  lastUpdated?: string;

  /**
   * Recommended next steps or expected timeline.
   */
  nextSteps?: string;
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
   * The maximum number of items to return per page. Optimized for performance and
   * typical use cases.
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
   * The starting index of the list for pagination. Use with `limit` for efficient
   * data retrieval.
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
  type?: 'income' | 'expense' | 'transfer' | 'investment' | 'refund' | 'bill_payment';
}

export interface TransactionCategorizeParams {
  /**
   * The new category for the transaction. Can be a hierarchical path.
   */
  category: string;

  /**
   * If true, Quantum AI will learn from this correction for future similar
   * transactions.
   */
  applyToFuture?: boolean;

  /**
   * Optional user notes for the transaction.
   */
  notes?: string | null;
}

export interface TransactionDisputeParams {
  /**
   * The primary reason for disputing the transaction.
   */
  reason: 'unauthorized' | 'duplicate' | 'wrong_amount' | 'not_received_goods' | 'other';

  /**
   * Detailed explanation of the dispute.
   */
  details?: string | null;

  /**
   * URLs to supporting documents (e.g., screenshots, communication logs).
   */
  supportingDocuments?: Array<string> | null;
}

export declare namespace Transactions {
  export {
    type Transaction as Transaction,
    type TransactionListResponse as TransactionListResponse,
    type TransactionDisputeResponse as TransactionDisputeResponse,
    type TransactionListParams as TransactionListParams,
    type TransactionCategorizeParams as TransactionCategorizeParams,
    type TransactionDisputeParams as TransactionDisputeParams,
  };
}
