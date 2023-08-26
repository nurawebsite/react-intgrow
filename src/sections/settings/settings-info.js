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


export const SettingsInfo = () => {
  const [values, setValues] = useState({
    first_name: 'Test',
    email: 'test@test.com'
  });

  const [response, setResponse] = useState(null);

  const auth = useAuth();

  const handleChange = useCallback(
    (event) => {
      setValues((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value
      }));
    },
    []
  );


  const handleSubmit = async (values, handlers) => {
    try {
      const response = await auth.updateUserInfo(values.name);
      setResponse(response);
      Router.reload();
      <Alert
        color="primary"
        severity="info"
        sx={{ mt: 3 }}
      >
        <div>
          Updated successfully.
        </div>
      </Alert>

    } catch (err) {
      helpers.setStatus({ success: false });
      helpers.setErrors({ submit: err.message });
      helpers.setSubmitting(false);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
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
                name="first_name"
                onChange={handleChange}
                type="text"
                value={values.first_name}
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
              onClick={handleSubmit}>
              Update Information
            </Button>
          </CardActions>
          <Divider />
        </Card>

      </form>

      {response && (
        <Alert
          color="primary"
          severity="info"
          sx={{ mt: 3 }}
        >
          <div>
            Updated successfully.
          </div>
        </Alert>
      )}

    </>
  );
};
