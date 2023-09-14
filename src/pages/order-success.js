import Head from 'next/head';
import { useRouter } from 'next/navigation';
import {
    Box,
    Stack,
    Typography,
    Link
} from '@mui/material';
import NextLink from 'next/link';
import { useAuth } from 'src/hooks/use-auth';
import { TopNav } from 'src/layouts/dashboard/top-nav';

const Page = () => {
    const router = useRouter();
    const auth = useAuth();

    return (
        <>
            <Head>
                <title>
                    Order Confirm | IntGrow Corp.
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
                        maxWidth: '100vw',
                        px: 3,
                        py: '100px',
                        width: '100%',
                        background: 'linear-gradient(to right, rgba(39, 70, 133, 0.8) 0%, rgba(61, 179, 197, 0.8) 100%), url(/assets/hero-banner.jpg)'
                    }}
                >
                    <div>
                        <Stack
                            spacing={1}
                            sx={{
                                mb: 3,
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#fff',
                                textAlign: 'center'
                            }}
                        >
                            <Typography variant="h2" sx={{ width: '50%'}}>
                            Thank you for choosing IntGrow&apos;s Import Duty Calculators!.
                            </Typography>
                            <Typography variant="subtitle1"> 
                            Smartly calculate Duties & Taxes for unbeatable profits.
                            </Typography>
                        </Stack>
                        <Stack
                            sx={{
                                position: 'absolute',
                                left: 0,
                                width: '100%'
                            }}
                        >
                            <svg width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="Apple-TV" transform="translate(0.000000, -402.000000)" fill="#FFFFFF">
                                        <path
                                            d="M0,439.134243 C175.04074,464.89273 327.944386,477.771974 458.710937,477.771974 C654.860765,477.771974 870.645295,442.632362 1205.9828,410.192501 C1429.54114,388.565926 1667.54687,411.092417 1920,477.771974 L1920,667 L1017.15166,667 L0,667 L0,439.134243 Z"
                                            id="Path"></path>
                                    </g>
                                </g>
                            </svg>
                        </Stack>
                    </div>
                </Box>
            </Box >
            <div>
                <Stack
                    sx={{
                        margin: '50px auto',
                        width: '90vw',
                        textAlign: 'center',
                        color: 'black'
                    }}
                >
                    <Typography variant="subtitle1"> Unlock business profitability
                    <Typography variant="overline" color="#457b9d" fontSize="16px"> Duty Calculator + Duty Saver Pro</Typography>
                     </Typography>
                    <Typography variant="subtitle1">
                        <Link
                            component={NextLink}
                            href="/"
                        > Let&apos;s Get Started
                        </Link>
                        
                    </Typography>
                </Stack>
            </div>
        </>
    );
};

Page.getLayout = (page) => (
    <div>
        {page}
    </div>
);

export default Page;
