import Head from 'next/head';
import { useRouter } from 'next/navigation';
import {
    Box,
    Stack,
    Typography
} from '@mui/material';
import { useAuth } from 'src/hooks/use-auth';
import { TopNav } from 'src/layouts/dashboard/top-nav';
import { Footer } from 'src/sections/footer';

const Page = () => {
    const router = useRouter();
    const auth = useAuth();

    return (
        <>
            <Head>
                <title>
                    Disclaimer | IntGrow Corp.
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
                                color: '#fff'
                            }}
                        >
                            <Typography variant="h2">
                                Disclaimer
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
                        margin: '70px auto 30px',
                        width: '90vw',
                        textAlign: 'justify',
                        color: 'neutral.400'
                    }}
                >
                    The information contained on this website INTGROW.CO is for general information purposes only. The
                    INTGROW.CO assumes no responsibility for errors or omissions in the contents of the website. In no event shall
                    the INTGROW.CO be liable for any special, direct, indirect, consequential, or incidental damages or any
                    damages whatsoever, whether in an action of contract, negligence or other torts, arising out of or in
                    connection with the use of the website or the contents of the website. The INTGROW.CO reserves the right to
                    make additions, deletions, or modifications to the contents on the website at any time without prior notice.
                    Every effort is made to keep the website up and running smoothly. However, the INTGROW.CO takes no
                    responsibility for, and will not be liable for, the website being temporarily unavailable due to technical
                    issues beyond our control. The INTGROW.CO does not warrant that the website is free of viruses or other
                    harmful components.
                </Stack>
            </div>
            <Footer/>
        </>
    );
};

Page.getLayout = (page) => (
    <div>
        {page}
    </div>
);

export default Page;
