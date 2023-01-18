import { Inter } from "@next/font/google"
const inter = Inter({ subsets: ['latin'] })

export default function Footer() {
    return (
        <footer className={inter.className}>
            <h3>Desenvolvido por <a target='_blank' href="https://github.com/victorlabussiere">Victor Labussiere</a></h3>
            <p>Visite meu github clicando no meu nome.</p>
        </footer>
    )
}