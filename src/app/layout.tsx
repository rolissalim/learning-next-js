export const metadata = {
  title: 'Procduct',
  description: 'Data Product',
}
import { Container } from "react-bootstrap"
import "../styles/index.scss"
import Header from "@/modules/AppsLayout/Header"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

      </head>
      <body>
        <Header />
        <Container>
          {children}
        </Container>
      </body>
    </html>
  )
}
