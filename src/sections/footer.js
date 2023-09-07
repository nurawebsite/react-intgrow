import React from 'react';
import { Container, Link, Stack, Typography, Button } from '@mui/material';
import { NextLink } from "next/link";

export const Footer = () => {

  return (
    <>
      <Stack
        direction="row"
        sx={{
          p: '32px 0',
          background: "linear-gradient(to right, rgb(39, 70, 133) 0%, rgb(61, 179, 197) 100%)",
        }}>
        <Container>
          <Stack
            direction="row"
            sx={{
              textAlign: "center",
              alignItems: "center",
              position: "relative"
            }}
          >
            <Stack
              sx={{ textAlign: 'left' }}
            >
              <Typography variant="h2">
                Subscribe for your free account
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  mt: 2
                }}
              >
                Get access to free calculations and HS code lookups. No credit card needed.
              </Typography>
            </Stack>

            <Stack
              spacing={6}
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

      {/* <footer class="footer" role="contentinfo">
        <div class="container">
          <div class="row">
            <div class="col-md-4 mb-4 mb-md-0">

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
            </div>
            <div class="col-md-7 ms-auto">
              <div class="row site-section pt-0">
                <div class="col-md-4 mb-4 mb-md-0">
                  <h3>Solutions</h3>
                  <ul class="list-unstyled">
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
                </div>
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
              </div>
            </div>
          </div>

          <div class="card-body footer-text row">
            <div class="col-sm-8">
              <Link
                component={NextLink}
                href="/disclaimer" target="_parent">Disclaimer </Link>
            </div>
            <div class="d-sm-flex col-sm-4 justify-content-center">
              <span class="d-block text-center d-sm-inline-block">Copyright © 2023 IntGrow</span>

            </div>
          </div>

        </div>
      </footer> */}
    </>
  );
};

