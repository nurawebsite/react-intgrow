import Head from 'next/head';
import { useRouter } from 'next/navigation';
import {
    Box,
    Button,
    Stack,
    TextField,
    TextareaAutosize,
    Typography
} from '@mui/material';
import { useAuth } from 'src/hooks/use-auth';
import { TopNav } from 'src/layouts/dashboard/top-nav';
import { Footer } from 'src/sections/footer';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const Page = () => {
    const router = useRouter();
    const auth = useAuth();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            submit: null
        },
        validationSchema: Yup.object({
            name: Yup
                .string()
                .max(255)
                .required('Name is required'),
            mobileno: Yup
                .string()
                .max(20),
            email: Yup
                .string()
                .email('Must be a valid email')
                .max(255)
                .required('Email is required'),
            subject: Yup
                .string()
                .max(255)
                .required('Mail Subject is required'),
            message: Yup
                .string()
                .max(255)
                .required('Message is required')
        }),
        onSubmit: async (values, helpers) => {
            console.log("contact form attempted");
        }
    });

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
            <Box
                sx={{
                    px: 3,
                    py: '100px',
                    width: '100%',
                    textAlign: 'center'
                }}
            >
                <div>
                    <Stack
                        spacing={1}
                        sx={{
                            margin: '30px auto',
                            maxWidth: '40%',
                            textAlign: 'justify',
                            color: 'neutral.400'
                        }}
                    >
                        <Typography variant="h4">
                            Contact Form
                        </Typography>


                        <form
                            noValidate
                            onSubmit={formik.handleSubmit}
                        >
                            <Stack spacing={3}>
                                <TextField
                                    error={!!(formik.touched.name && formik.errors.name)}
                                    fullWidth
                                    helperText={formik.touched.email && formik.errors.email}
                                    label="Name"
                                    name="name"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.name}
                                />
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
                                    error={!!(formik.touched.mobileno && formik.errors.mobileno)}
                                    fullWidth
                                    helperText={formik.touched.email && formik.errors.email}
                                    label="Mobile No."
                                    name="mobileno"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.mobileno}
                                />
                                <TextField
                                    error={!!(formik.touched.subject && formik.errors.subject)}
                                    fullWidth
                                    helperText={formik.touched.password && formik.errors.password}
                                    label="Subject"
                                    name="subject"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.subject}
                                />
                                <TextareaAutosize
                                    minRows={15}
                                    maxRows={30}
                                    error={!!(formik.touched.message && formik.errors.message)}
                                    fullWidth
                                    helperText={formik.touched.password && formik.errors.password}
                                    label="Message"
                                    name="message"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.message}
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
                                width='50%'
                                size="large"
                                sx={{ mt: 3 }}
                                type="submit"
                                variant="contained"
                            >
                                Send Message
                            </Button>

                        </form>

                    </Stack>
                </div>
            </Box>
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
