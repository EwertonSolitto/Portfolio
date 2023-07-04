import './styles/index.scss'

export const metadata = {
  title: 'Portfolio',
  description: 'Portfolio do Ewerton',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='pt-br'>
      <body>
        {children}
      </body>
    </html>
  )
}