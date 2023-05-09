import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardHeader } from '@mui/material';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useNavigate } from 'react-router-dom';
import { createPurchase } from '../../services/userService';


const PaymentSelectionComponent = () => {
  const navigate = useNavigate()
  return (
    <Card sx={{ border: 'none', boxShadow: 'none', maxWidth: 477, margin: '0 auto', padding: '1em' }} >

      <CardHeader title="Choose payment method" sx={{ color: 'red.main', fontSize: '48px' }} titleTypographyProps={{ variant: 'h5', fontFamily: 'dosis', marginBottom: '14px' }} />
      <CardContent>
        {
          /**Datos para probar el pago con paypal:
           * correo: sb-gyd0c25884475@personal.example.com
           * contraseña: %5)9Uqmp
           */
        }
        <PayPalScriptProvider options={{'client-id': "AWBz22U-IiFbvZ-YGLGI1r1jsPcL7Oc7zZ-rNwl8vlyP7q-goquqs-GjmIUYRBHZ_ZZM80_c6f_301hZ", 'currency': 'EUR'}}>
          <PayPalButtons 
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: localStorage.getItem(`total-${localStorage.getItem('locoolUsername')}`)
                    }
                  }
                ]
              })
            }}

            onApprove={async() => {
              const cartMap = new Map(
                JSON.parse(
                  localStorage.getItem(
                    `cart-${localStorage.getItem('locoolUsername')}`
                  )
                )
              )
              const cartArray = [...cartMap.values()] // Convert iterator to array
              const cartObj = { "items": cartArray }
              
              const purchase = await createPurchase(
                localStorage.getItem('locoolUsername'),
                (cartObj)
              )
              localStorage.setItem(
                `total-${localStorage.getItem('locoolUsername')}`,
                0
              )
              localStorage.setItem(
                `cart-${localStorage.getItem('locoolUsername')}`,
                JSON.stringify([...new Map()])
              )
              navigate('/app/success')
            }}
          />
        </PayPalScriptProvider>

      </CardContent>
    </Card>
  );
}

export default PaymentSelectionComponent
