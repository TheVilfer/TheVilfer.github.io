import Header from "./header";
import Footer from "./footer";
import Head from "next/head";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="app">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Sergei Polin" />
      </Head>
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
}
