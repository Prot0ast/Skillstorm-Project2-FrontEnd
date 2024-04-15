export interface Device { 
    id: string
    custId: string
    name: string
    number: string
}

export interface Plan{
    id: string
    name: string
    price: number
    deviceLimit: number
}

export interface CustomerPlan{
    id: string
    plans: [string]
}