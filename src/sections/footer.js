import React from 'react';
import { Container, Link, Stack, Typography, Button, Box } from '@mui/material';
import { NextLink } from "next/link";
import { height } from '@mui/system';
import { useEffect } from 'react';


export const Footer = () => {

  useEffect(
    () => {
      var iframe = document.getElementById("footer");
      if (iframe) {
        iframe.width = iframe.contentWindow.document.body.scrollWidth;
        iframe.height = iframe.contentWindow.document.body.scrollHeight;
      }
    },
    [])

  return (
    <>
      <Stack
        direction="row"
        sx={{
          p: '32px 0',
          m: '36px 0 0',
          background: "linear-gradient(to right, rgb(39, 70, 133) 0%, rgb(61, 179, 197) 100%)",
        }}>
        <Container maxWidth="100%">
          <Stack
            direction="row"
            sx={{
              textAlign: "center",
              alignItems: "center",
              position: "relative"
            }}
          >
            <Stack
              sx={{ textAlign: 'left', marginLeft: "10%" }}
            >
              <Typography variant="h2" color="#fff">
                Subscribe for your free account
              </Typography>
              <Typography
                variant="body2"
                color="#fff"
                sx={{
                  mt: 2
                }}
              >
                Get access to free calculations and HS code lookups. No credit card needed.
              </Typography>
            </Stack>

            <Stack
              sx={{
                textAlign: 'right',
                position: 'absolute',
                right: '10%'
              }}
            >
              <div>
                <Link
                  component={NextLink}
                  href="/auth/register">
                  <Button
                    sx={{
                      backgroundColor: "#000",
                      color: "#fff"
                    }}
                    variant="contained"
                  >
                    Register Now
                  </Button>
                </Link>
              </div>
            </Stack>

          </Stack>

        </Container>
      </Stack>
      <Box
        sx={{
          flex: '1 1 auto',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <iframe id="footer" src="/footer.html" width="100%" height="100%"
          style={{ border: 'none', maxHeight: '400px', height: '70vh' }}
          data-tf-redirect-target="_self"></iframe>

      </Box>

      {/* <Container>
        <Stack direction="row">
          <Stack>
            <Link
              component={NextLink}
              href="/home">
              <img src="landingPageAssets/img/logo_b.png" alt="" class="img-fluid" width="100" />
            </Link>
            <p>Smartly Calculate Duties and Taxes for Unbeatable Profits</p>
            <p class="social">
              <Link
                component={NextLink}
                href="#"><span class="bi bi-facebook"></span>
              </Link>
              <Link
                component={NextLink}
                href="#"><span class="bi bi-instagram"></span>
              </Link>
              <Link
                component={NextLink}
                href="#"><span class="bi bi-linkedin"></span>
              </Link>
            </p>
          </Stack>
          <Stack direction="row">
           
            <Stack>
              <Typography variant="h3">Solutions</Typography>
              <ul sx={{textDecoration: "none" }}>
                <li>
                  <Link
                    component={NextLink}
                    href="/hscodefinder">HS Code Finder
                  </Link>
                </li>
                <li>
                  <Link
                    component={NextLink}
                    href="/dutycalculator">Import Duty Calculator
                  </Link>
                </li>
                <li>
                  <Link
                    component={NextLink}
                    href="/dutysaver">DutySaver Pro
                  </Link>
                </li>
              </ul>
            </Stack>
            <div class="col-md-4 mb-4 mb-md-0">
              <h3>Resources</h3>
              <ul class="list-unstyled">
                <li><Link
                  component={NextLink}
                  href="#">Help Center</Link></li>
                <li><Link
                  component={NextLink}
                  href="#">API Documentations</Link></li>
                <li><Link
                  component={NextLink}
                  href="#">E-Commerce Integration</Link></li>
                <li><Link
                  component={NextLink}
                  href="#">Glossary</Link></li>
              </ul>
            </div>
            <div class="col-md-4 mb-4 mb-md-0">
              <h3>About</h3>
              <ul class="list-unstyled">
                <li>
                  <Link
                    component={NextLink}
                    href="/subscriptions">Pricing
                  </Link>
                </li>
                <li><Link
                  component={NextLink}
                  href="/privacy">Privacy</Link></li>
                <li><Link
                  component={NextLink}
                  href="/terms-conditions">Terms</Link></li>
                <li><Link
                  component={NextLink}
                  href="/contact-us">Contact us</Link></li>
              </ul>
            </div>
           
          </Stack>
        </Stack>

        <Stack direction="row">
          <Typography variant="overline">
            <Link
              component={NextLink}
              href="/disclaimer" target="_parent">Disclaimer </Link>
          </Typography>
          <Typography variant="overline"
            sx={{
              textAlign: "right"
            }}>
            Copyright © 2023 IntGrow
          </Typography>
        </Stack>

      </Container> */}
    </>
  );
};

