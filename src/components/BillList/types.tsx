import { Bill } from "store/reducers/bill/types";

export interface BillListContainerProps {
	isBill: boolean,
}

export interface BillListProps {
	bills: Bill[];
	onRemoveBill: (id: string) => void;
	onTransactionToBill: (id: string) => void;
}