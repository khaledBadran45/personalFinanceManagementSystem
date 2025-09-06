export interface page {
  current_page: number;
  page_data: Transaction[];
}
export interface Transaction {
  path: string;
  sender: string;
  category: string;
  date: Date;
  amount: string;
}
