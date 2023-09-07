import Head from 'next/head';
import { useRouter } from 'next/navigation';
import {
    Box,
    Stack,
    Typography
} from '@mui/material';
import { useAuth } from 'src/hooks/use-auth';
import { TopNav } from 'src/layouts/dashboard/top-nav';
import { Footer } from '../sections/footer';

const Page = () => {
    const router = useRouter();
    const auth = useAuth();

    return (
        <>
            <Head>
                <title>
                    Privacy Policy | IntGrow Corp.
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
                                Privacy Policy
                            </Typography>
                            <Typography variant="subtitle2">
                                We take your privacy seriously.
                            </Typography>

                        </Stack>
                        <Stack
                            sx={{
                                position: 'absolute',
                                left: 0,
                                width: "100%"
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
                        margin: '30px auto',
                        width: '90vw',
                        textAlign: 'justify',
                        color: 'neutral.400'
                    }}
                >
                    <p>Your privacy is important to us. It is Intgrow&apos;s policy to respect your privacy regarding any information we may collect from you across our website, <a href="#">https://intgrow.co/</a>, and other sites we own and operate.</p>
                    <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we&apos;re collecting it and how it will be used.</p>
                    <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we&apos;ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.</p>
                    <p>We don&apos;t share any personally identifying information publicly or with third-parties, except when required to by law.</p>
                    <p>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</p>
                    <p>You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.
                        Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.</p>
                    <p>As is common practice with almost all professional websites this site uses cookies, which are small files that are downloaded to your computer to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies.</p>
                    <p>If you create an account with us then we will use cookies for the management of the signupprocess and general administration. These cookies will usually be deleted when you log out however in some cases they may remain afterwards to remember your site preferences when logged out.</p>
                    <p>We use cookies when you are logged in. This prevents you from having to log in every single time you visit a new page. These cookies are typically removed or cleared when you log out to ensure that you can only access restricted features and areas when logged in.</p>
                    <p>This site uses Google Analytics which for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to enhance our user experience.</p>
                    <p>This policy is effective as of 10 August 2021.</p>
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
