export const metadata = {
  title: 'OpenCode Dashboard',
  description: 'AI coding workflow dashboard for anomalyco/opencode',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
