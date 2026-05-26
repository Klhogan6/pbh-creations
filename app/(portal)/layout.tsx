// TODO: Add auth guard here — feature/supabase-auth
// Unauthenticated users should be redirected to /login via middleware.ts
export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* TODO: Portal nav — feature/portal-scaffold */}
      <main>{children}</main>
    </div>
  );
}
