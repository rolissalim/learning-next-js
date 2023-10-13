export const metadata = {
    title: 'Login',
    description: 'Page Login',
}
import { Container } from "react-bootstrap"
import "../../styles/index.scss"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <Container>
                    {children}
                </Container>
            </body>
        </html>
    )
}
