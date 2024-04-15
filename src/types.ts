export interface Customer {
  id: string;
  fullName: string;
  email: string;
  plans: [string, [string, string, number, number]];// TODO: insert Plans
}
