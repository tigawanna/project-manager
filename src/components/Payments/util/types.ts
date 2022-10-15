
export interface PaymentResponnse {
  id: string
  created: string
  updated: string
  "@collectionId": string
  "@collectionName": string
  "@expand": Expand
  amount: number
  createdBy: string
  deletedAt: string
  deletedBy: string
  shop: string
  updatedBy: string
}

export interface Expand {
  shop: Shop
}

export interface Shop {
  "@collectionId": string
  "@collectionName": string
  created: string
  floor: string
  id: string
  monthlyrent: number
  name: string
  prevTenant: string
  shopNumber: string
  tenant: string
  transferedAt: string
  transferedBy: string
  updated: string
}
