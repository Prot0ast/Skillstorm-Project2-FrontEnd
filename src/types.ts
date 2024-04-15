export interface Plan{
  GUID: string;
  id: string;
  name: string;
  price: number;
  deviceLimit: number;
}

export interface Customer {
  id: string;
  fullName: string;
  email: string;
  plans: Plan;
}
