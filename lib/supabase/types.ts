export type SubscriptionStatus = "active" | "canceled" | "past_due";
export type SubscriptionTier = "starter" | "hands_off";

export interface Profile {
  id: string;
  email: string | null;
  full_name: string | null;
  business_name: string | null;
  stripe_customer_id: string | null;
  subscription_status: SubscriptionStatus | null;
  subscription_tier: SubscriptionTier | null;
  subscribed_at: string | null;
}

// Supabase-compatible Database type — structure matches what @supabase/supabase-js expects
export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: Profile;
        Insert: {
          id: string;
          email?: string | null;
          full_name?: string | null;
          business_name?: string | null;
          stripe_customer_id?: string | null;
          subscription_status?: SubscriptionStatus | null;
          subscription_tier?: SubscriptionTier | null;
          subscribed_at?: string | null;
        };
        Update: {
          id?: string;
          email?: string | null;
          full_name?: string | null;
          business_name?: string | null;
          stripe_customer_id?: string | null;
          subscription_status?: SubscriptionStatus | null;
          subscription_tier?: SubscriptionTier | null;
          subscribed_at?: string | null;
        };
        Relationships: [];
      };
    };
    // Empty schemas — mapped over never so they have no keys and no index signature
    Views: { [_ in never]: never };
    Functions: { [_ in never]: never };
    Enums: { [_ in never]: never };
    CompositeTypes: { [_ in never]: never };
  };
};
