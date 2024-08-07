import { RefundParams } from './RefundParams';

export interface RefundInterface {
  amount: number;
  currency: string;
  guid?: string;
  refundEmail?: string;
  token?: string;
  id: string;
  requestDate: string;
  status: string;
  invoice: string;
  supportRequest?: string;
  refundAddress?: string;
  txid?: string;
  type?: string;
  reference?: string;
  transactionCurrency: string;
  transactionAmount: number;
  transactionRefundFee: number;
  lastRefundNotification?: string;
  notificationURL?: string;
  refundFee: number;
  immediate: boolean;
  buyerPaysRefundFee: boolean;
  preview?: boolean;
  params?: RefundParams;
}

export class Refund implements RefundInterface {
  amount: number;
  currency: string;
  guid?: string;
  id: string;
  params?: RefundParams;
  refundEmail?: string;
  requestDate: string;
  status: string;
  token?: string;
  invoice: string;
  supportRequest?: string;
  refundAddress?: string;
  txid?: string;
  type?: string;
  reference?: string;
  transactionCurrency: string;
  transactionAmount: number;
  transactionRefundFee: number;
  lastRefundNotification?: string;
  notificationURL?: string;
  refundFee: number;
  immediate: boolean;
  buyerPaysRefundFee: boolean;
  preview?: boolean;

  public constructor(amount: number, invoiceId: string, token: string) {
    this.amount = amount;
    this.invoice = invoiceId;
    this.token = token;
  }
}
