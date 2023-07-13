import './styles/index.scss'

export const metadata = {
  title: 'Ewerton Solitto',
  description: 'Portfolio do Ewerton Solitto',
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