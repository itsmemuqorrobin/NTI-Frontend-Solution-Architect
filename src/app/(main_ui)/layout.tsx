import { Wrapper } from "./wrapper";

export default function RootMainUILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Wrapper>{children}</Wrapper>;
}
