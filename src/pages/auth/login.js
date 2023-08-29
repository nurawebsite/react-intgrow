import { useCallback, useState, useReducer } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Alert,
  Box,
  Button,
  FormHelperText,
  Link,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography
} from '@mui/material';
import { useAuth } from 'src/hooks/use-auth';
import { TopNav } from 'src/layouts/dashboard/top-nav';
import { HANDLERS } from 'src/utils/constants';
import { reducer, initialState } from 'src/contexts/auth-context';

const Page = () => {
  const router = useRouter();
  const auth = useAuth();
  const [method, setMethod] = useState('email');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [state, dispatch] = useReducer(reducer, initialState);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      submit: null
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      password: Yup
        .string()
        .max(255)
        .required('Password is required')
    }),
    onSubmit: async (values, helpers) => {
      try {
        const response = await auth.signIn(values.email, values.password);

        if (!response.ok) {
          const responseData = await response.json();
          const loginError = new Error(responseData.error || 'An error occurred');
          loginError.status = response.status;
          throw loginError;
        }

        const responseData = await response.json();
        window.sessionStorage.setItem('authenticated', 'true');
        window.localStorage.setItem('access_token', responseData.result.token);

 
        const user = {
          id: responseData.result.id,
          name: responseData.result.first_name,
          email: responseData.result.email
        };

        dispatch({
          type: HANDLERS.SIGN_IN,
          payload: user
        });

        setData(responseData);
        router.push('/');

      } catch (err) {
        console.log("Error in login");
        // setError(err.message);
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    }
  });


  return (
    <>
      <Head>
        <title>
          Login | IntGrow Corp.
        </title>
      </Head>
      <TopNav onNavOpen={() => setOpenNav(true)} />
      <Box
        sx={{
          backgroundColor: 'background.paper',
          flex: '1 1 auto',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: '100px',
            width: '100%'
          }}
        >
          <div>
            <Stack
              spacing={1}
              sx={{ mb: 3 }}
            >
              <Typography variant="h4">
                Login
              </Typography>
              <Typography
                color="text.secondary"
                variant="body2"
              >
                Don&apos;t have an account?
                &nbsp;
                <Link
                  component={NextLink}
                  href="/auth/register"
                  underline="hover"
                  variant="subtitle2"
                >
                  Register
                </Link>
              </Typography>
            </Stack>

            <form
              noValidate
              onSubmit={formik.handleSubmit}
            >
              <Stack spacing={3}>
                <TextField
                  error={!!(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label="Email Address"
                  name="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="email"
                  value={formik.values.email}
                />
                <TextField
                  error={!!(formik.touched.password && formik.errors.password)}
                  fullWidth
                  helperText={formik.touched.password && formik.errors.password}
                  label="Password"
                  name="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="password"
                  value={formik.values.password}
                />
              </Stack>

              {formik.errors.submit && (
                <Typography
                  color="error"
                  sx={{ mt: 3 }}
                  variant="body2"
                >
                  {formik.errors.submit}
                </Typography>
              )}
              <Button
                fullWidth
                size="large"
                sx={{ mt: 3 }}
                type="submit"
                variant="contained"
              >
                Log In
              </Button>

            </form>
            {/* {error && <span>{error}</span>} */}
            {data && <span>Login successful.</span>}
          </div>
        </Box>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <div>
    {page}
  </div>
);

export default Page;
