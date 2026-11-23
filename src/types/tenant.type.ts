
export interface Tenant {
  id: string;
  tenant_name: string;
  email: string;
  landlord_id: string;
  property_id: string;
  created_at: Date;
  updated_at: Date;
}

export interface CreateTenantInput {
  tenant_name: string;
  email: string;
  property_id: string;
}

export interface UpdateTenantInput {
  tenant_name?: string;
  email?: string;
  property_id?: string;
}
