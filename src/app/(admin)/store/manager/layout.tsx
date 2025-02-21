'use client'
import AdminLayout from "@/components/Layout/LayoutAdmin";

export default function AdminLayoutt({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AdminLayout>{children}</AdminLayout>;
}
