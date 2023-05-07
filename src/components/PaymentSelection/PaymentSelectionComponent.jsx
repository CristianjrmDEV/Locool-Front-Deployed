import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcPaypal } from '@fortawesome/free-brands-svg-icons';
import { faCcMastercard } from '@fortawesome/free-brands-svg-icons';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useNavigate } from 'react-router-dom';



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
                      value: localStorage.getItem(`total-${localStorage.getItem('username')}`)
                    }
                  }
                ]
              })
            }}

            onApprove={(data, actions) => {
              localStorage.setItem(`total-${localStorage.getItem('username')}`, 0)
              localStorage.setItem(`cart-${localStorage.getItem('username')}`, JSON.stringify([...new Map()]))
              navigate('/app/success');
            }}
          />
        </PayPalScriptProvider>

      </CardContent>
    </Card>
  );
}

export default PaymentSelectionComponent
