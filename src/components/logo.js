import { useTheme } from '@mui/material/styles';
import NextLink from 'next/link';
import { Link } from '@mui/material';

export const Logo = () => {
  const theme = useTheme();
  const fillColor = theme.palette.primary.main;

  return (
    <Link
      component={NextLink}
      href="/"
    >
      <img
        src='/assets/logos/main-logo.png'
        alt='intgrow_logo'
      />
    </Link>
  );
};
