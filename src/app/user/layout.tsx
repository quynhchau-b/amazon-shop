import LayoutUser from "@/components/Layout/LayoutUser";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LayoutUser>{children}</LayoutUser>;
}
