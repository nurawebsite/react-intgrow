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

export const SettingsPassword = () => {
  const [values, setValues] = useState({
    password: '********',
    confirm: '',
    first_name: 'Test',
    email: 'test@test.com'
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

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
    },
    []
  );

  return (
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
              name="username"
              onChange={handleChange}
              type="text"
              value={values.first_name}
            />
            <TextField
              fullWidth
              label="Email-Id"
              name="email"
              onChange={handleChange}
              type="email"
              value={values.email}
            />
          </Stack>
        </CardContent>
        <CardActions sx={{ mb: 3 }}>
          <Button variant="contained">
            Update Information
          </Button>
        </CardActions>
        <Divider />
      </Card>
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
              label="Password"
              name="password"
              onChange={handleChange}
              type="password"
              value={values.password}
            />
            <TextField
              fullWidth
              label="Password (Confirm)"
              name="confirm"
              onChange={handleChange}
              type="password"
              value={values.confirm}
            />
          </Stack>
        </CardContent>
        <Divider />
        <CardActions sx={{ mb: 3 }}>
          <Button variant="contained">
            Update Password
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};
