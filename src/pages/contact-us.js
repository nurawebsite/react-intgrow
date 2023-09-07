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
                    Contact Us | IntGrow Corp.
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
                                Get in touch
                            </Typography>
                            <Typography variant="subtitle2">
                                Have questions about intgrow or our services? Contact us and our team will respond promptly.                            </Typography>

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
                        margin: '30px auto',
                        width: '90vw',
                        textAlign: 'justify',
                        color: 'neutral.400'
                    }}
                >
                    <div class="row">
                        <h2>Contact Form</h2>
                        <div class="col-md-4 ms-auto order-2" data-aos="fade-up">
                            <ul class="list-unstyled">
                                <li class="mb-3">
                                    <strong class="d-block mb-1">Address</strong>
                                    <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
                                </li>
                                <li class="mb-3">
                                    <strong class="d-block mb-1">Phone</strong>
                                    <span>+1 232 3235 324</span>
                                </li>
                                <li class="mb-3">
                                    <strong class="d-block mb-1">Email</strong>
                                    <span>support@intgrow.com</span>
                                </li>
                            </ul>
                        </div>

                        <div class="col-md-6 mb-5 mb-md-0" data-aos="fade-up">
                            <form action="forms/contact.php" method="post" role="form" class="php-email-form">

                                <div class="row">
                                    <div class="col-md-6 form-group">
                                        <label for="name">First Name</label>
                                        <input type="text" name="name" class="form-control" id="name" required />
                                    </div>
                                    <div class="col-md-6 form-group mt-3 mt-md-0">
                                        <label for="name">Last Name</label>
                                        <input type="email" class="form-control" name="email" id="email" required />
                                    </div>
                                    <div class="col-md-6 form-group">
                                        <label for="name">Email</label>
                                        <input type="text" name="name" class="form-control" id="name" required />
                                    </div>
                                    <div class="col-md-6 form-group mt-3 mt-md-0">
                                        <label for="name">Mobile No.</label>
                                        <input type="email" class="form-control" name="email" id="email" required />
                                    </div>
                                    <div class="col-md-12 form-group mt-3">
                                        <label for="name">Subject</label>
                                        <input type="text" class="form-control" name="subject" id="subject" required />
                                    </div>
                                    <div class="col-md-12 form-group mt-3">
                                        <label for="name">Message</label>
                                        <textarea class="form-control" name="message" required></textarea>
                                    </div>

                                    <div class="col-md-12 mb-3">
                                        <div class="loading">Loading</div>
                                        <div class="error-message"></div>
                                        <div class="sent-message">Your message has been sent. Thank you!</div>
                                    </div>

                                    <div class="col-md-6 form-group">
                                        <input type="submit" class="btn btn-primary d-block w-100" value="Send Message" />
                                    </div>
                                </div>

                            </form>
                        </div>

                    </div>
                </Stack>
            </div>
            <Footer />
        </>
    );
};

Page.getLayout = (page) => (
    <div>
        {page}
    </div>
);

export default Page;
