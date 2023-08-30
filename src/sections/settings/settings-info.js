import { useCallback, useState } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Stack,
  TextField,
  Alert
} from '@mui/material';
import { useAuth } from 'src/hooks/use-auth';
import { getUserData } from 'src/utils/constants';
import { useFormik } from 'formik';
import * as Yup from 'yup';


export const SettingsInfo = () => {
  const [values, setValues] = useState(getUserData());
  const [errorMessage, setErrorMessage] = useState('');

  const [data, setData] = useState(null);

  const auth = useAuth();

  const formik = useFormik({
    initialValues: {
      submit: null
    },
    onSubmit: async (values, helpers) => {
      setData(null);
      try {
        const response = await auth.updateUserInfo(values.name);
        if (!response.ok) {
          const responseData = await response.json();
          const updateUserError = new Error(responseData.message || 'An error occurred');
          updateUserError.status = response.status;
          throw updateUserError;
        }
        const responseData = await response.json();
        setData(responseData);
        setError(null);
        
         Router.reload();
       

      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    }
  });

  const handleChange = useCallback(
    (event) => {
      setValues((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value
      }));
    },
    []
  );


  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Card>
          <CardHeader
            subheader="Update your personal information"
            title="Personal Information"
          />
          <CardContent>
            <Stack
              spacing={3}
              sx={{ maxWidth: 400 }}
            >
              <TextField
                fullWidth
                label="Name"
                name="name"
                onChange={handleChange}
                type="text"
                value={values.name}
                required
              />
              <TextField
                fullWidth
                label="Email-Id"
                name="email"
                type="email"
                value={values.email}
                disabled
              />
            </Stack>
          </CardContent>
          <CardActions sx={{ mb: 3 }}>
            <Button
              variant="contained"
              type="submit"
              onClick={formik.handleSubmit}>
              Update Information
            </Button>
          </CardActions>
          {data && data.message && <span style={{ color: 'blue' }}>{data.message}</span>}
          <Divider />
        </Card>

      </form>

    </>
  );
};
