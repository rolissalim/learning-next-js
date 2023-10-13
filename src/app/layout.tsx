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
      <body>
        <Header />
        <Container>
          {children}
        </Container>
      </body>
    </html>
  )
}
