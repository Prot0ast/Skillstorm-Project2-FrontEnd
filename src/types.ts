export interface Device { 
    id: string
    custId: string
    name: string
    number: string
}

export interface CustomerPlan{
    id: string
    plans: string[]
}

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
