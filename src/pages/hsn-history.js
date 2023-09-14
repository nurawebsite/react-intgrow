import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Link, Stack, TextField, Typography, Alert } from '@mui/material';
import { useAuth } from 'src/hooks/use-auth';
import { TopNav } from 'src/layouts/dashboard/top-nav';
import { useState } from 'react';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';


const Page = () => {
  const router = useRouter();
  const auth = useAuth();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      password: '',
      submit: null
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      name: Yup
        .string()
        .max(255)
        .required('Name is required'),
      password: Yup
        .string()
        .max(255)
        .required('Password is required')
    }),
    onSubmit: async (values, helpers) => {
      try {
        const response = await auth.signUp(values.email, values.name, values.password);
        if (!response.ok) {
          const responseData = await response.json();
          const registerError = new Error(responseData.message || 'An error occurred');
          registerError.status = response.status;
          throw registerError;
        }
        const responseData = await response.json();
        setData(responseData);
        setError(null);
        
        router.push('/');
      } catch (err) {
        console.log("Error in registration");
        // helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    }
  });

  return (
    <>
      <Head>
        <title>
          HSN History | IntGrow Corp.
        </title>
      </Head>
      <Box
        sx={{
          flex: '1 1 auto',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <iframe src="/hsnHistory.html" width="100%" height="100%" style={{border:'none'}} data-tf-redirect-target="_self"></iframe>

      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
