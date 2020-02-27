import { Bill } from "store/reducers/bill/types";

export interface BillListItemProps {
	bill: Bill;
	onRemoveBill: (id: string) => void;
	onTransactionToBill: (id: string) => void;
}