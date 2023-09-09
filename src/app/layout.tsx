import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hello :3'
}

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    return <div>{children}</div>
}

export default HomeLayout;