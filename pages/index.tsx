import Head from 'next/head'
import styles from '../styles/Home.module.css'
import mercadopago from 'mercadopago'
import useMercadoPago from '../lib/MercadoPago'
import { useEffect } from 'react'

export default function Home(props: any) {

  const mercadopago = useMercadoPago(process.env.NEXT_PUBLIC_MERCADO_PAGO_PUBLIC_KEY || '', {
    locale: 'pt-BR'
  });

  useEffect(() => {
    if (mercadopago) {
      mercadopago.checkout({
        preference: {
          id: props.preference_id
        },
        render: {
          container: '.checkout-container',
          label: 'Pagar',
        }
      })
    }
    return () => {
      const buttonContainer = document.querySelector('.checkout-container')
      const button = buttonContainer?.lastElementChild

      if(buttonContainer && button){
        buttonContainer.removeChild(button)
      }
    }
  }, [mercadopago])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <code className={styles.code}>Para prosseguir com o checkout clique em pagar</code>
        <div className="checkout-container" />
      </main>
    </>
  )
}

export async function getServerSideProps(context: any) {
  // Adicione as credenciais
  mercadopago.configure({
    access_token: process.env.MERCADO_PAGO_ACCESS_TOKEN || '',
  });

  // Cria um objeto de preferência
  let preference = {
    items: [
      {
        title: 'Meu produto',
        unit_price: 100,
        quantity: 1,
      }
    ]
  };

  // mercadopago.preferences.create(preference)
  //   .then(function (response) {
  //     // Este valor substituirá a string "<%= global.id %>" no seu HTML
  //     global.id = response.body.id;
  //   }).catch(function (error) {
  //     console.log(error);
  //   });

  const response = await mercadopago.preferences.create(preference)

  return {
    props: {
      asd: 123,
      preference_id: response.body.id
    },
  }
}