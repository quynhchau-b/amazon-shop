import LayoutType2 from "@/components/Layout/LayoutType2";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LayoutType2>{children}</LayoutType2>;
}
