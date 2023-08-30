import { useCallback, useState } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Stack,
  TextField
} from '@mui/material';
import { useFormik } from 'formik';
import { useAuth } from 'src/hooks/use-auth';


export const SettingsPassword = () => {
  const auth = useAuth();
  const [data, setData] = useState(null);

  const formik = useFormik({
    initialValues: {
      oldPassword: '',
      newPassword: '',
      submit: null
    },
    onSubmit: async (values, helpers) => {
      setData(null);
      try {
        const response = await auth.updatePassword(values.oldPassword, values.newPassword);
        if (!response.ok) {
          const responseData = await response.json();
          const errorObj = new Error(responseData.message || 'An error occurred');
          errorObj.status = response.status;
          throw errorObj;
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

  return (
    <>
    <form onSubmit={formik.handleSubmit}>
      <Card>
        <CardHeader
          subheader="Update password"
          title="Password"
        />
        <Divider />
        <CardContent>
          <Stack
            spacing={3}
            sx={{ maxWidth: 400 }}
          >
            <TextField
              fullWidth
              label="Old Password"
              name="oldPassword"
              onChange={formik.handleChange}
              type="password"
              value={formik.values.oldPassword}
            />
            <TextField
              fullWidth
              label="New Password"
              name="newPassword"
              onChange={formik.handleChange}
              type="password"
              value={formik.values.newPassword}
            />
          </Stack>
        </CardContent>
        <Divider />
        <CardActions sx={{ mb: 3 }}>
          <Button
            variant="contained"
            type="submit"
            onClick={formik.handleSubmit}>
            Update Password
          </Button>
        </CardActions>
      </Card>
    </form>
    {data && data.message && <span style={{ color: 'blue' }}>{data.message}</span>}
  </>
  );
};
