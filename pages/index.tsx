import Header from "../components/Header"
import ProductList from "../components/ProductList"
import { IProduct } from "../components/Product"
import Footer from "../components/Footer"
import Contact from "../components/Contact"
import Head from "next/head"

import "../styles.scss"

interface IIndexProps {
  products: IProduct[]
}

const Index = (props: IIndexProps) => {
  return (
    <div className="app">
      <Head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="YjlmZTIzNDYtZTY1Ni00OGNiLWE5MjUtNTgwYTRjNTlkNWRiNjM3MTI3ODY0NDE5MjAyMTQ5" id="snipcart"></script>
        <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
      </Head>
      <Header />
      <main className="main">
        <img src="/static/icon.svg" alt="a" className="background-image" />
        <div className="promotional-message">
          <h3>DISCOVER</h3>
          <h2>MiniM</h2>
          <p>An <strong>exclusive E-shop of stylish feng-chui items</strong> available for everyone.</p>
        </div>
        <ProductList products={props.products} />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

Index.getInitialProps = async () => {
  return {
    products: [
      {id: "nextjs_luxury", name: "Quality Relaxing Chair", price: 45.00, image: "../static/luxury.jpg", description: "A chair called Vendome by it's creator."} as IProduct,
      {id: "nextjs_bathset", name: "Feng-chui Bath Set", price: 250.00, image: "../static/bathset.jpg", description: "A typical exemple of what a feng-chui expert can do with not so much."} as IProduct,
      {id: "nextjs_suspended", name: "Suspended Zen Chair", price: 75.50, image: "../static/suspended.jpg", description: "A suspended chair to free your mind and your creativity with a warm coffee in your hands."} as IProduct,
      {id: "nextjs_table", name: "Anti-Stress Table", price: 35.00, image: "../static/table.jpg", description: "By far our best product, the well-known calming power of wood is nothing to prove in feng-chui culture."} as IProduct,
      {id: "nextjs_lamptable", name: "Our last Bad Boys.", price: 75.00, image: "../static/lamptable.jpg", description: "The totally needed duo ( lamp and table ) for a long and comfortable night with your favorite books."} as IProduct,
    ]
  }
}

export default Index