-- Create profiles table, extended from auth.users
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade,
  email text,
  full_name text,
  business_name text,
  stripe_customer_id text,
  subscription_status text check (subscription_status in ('active', 'canceled', 'past_due')),
  subscription_tier text check (subscription_tier in ('starter', 'hands_off')),
  subscribed_at timestamptz,
  primary key (id)
);

-- Row Level Security: users can only read/update their own profile
alter table public.profiles enable row level security;

create policy "Users can view their own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update their own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Auto-create a profile row when a new user signs up
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = ''
as $$
begin
  insert into public.profiles (id, email, full_name)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data->>'full_name'
  );
  return new;
end;
$$;

create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
