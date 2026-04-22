import "../styles/globals.css";

export const metadata = {
  title: "DocFácil - Empregos & Concursos",
  description: "Portal de empregos e concursos em Moçambique e África Austral"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
