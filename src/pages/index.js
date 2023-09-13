import Head from 'next/head';
import { Box, Container, Unstable_Grid2 as Grid, Typography } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { OverviewBudget } from 'src/sections/overview/overview-budget';
import { OverviewLatestOrders } from 'src/sections/overview/overview-latest-orders';
import { OverviewLatestDutyOrders } from 'src/sections/overview/overview-latest-duty-orders';
import { dashboardItem, hsnHistory, dutyHistory } from 'src/layouts/dashboard/config';
import { useState, useEffect } from 'react';
import { useAuth } from 'src/hooks/use-auth';
import { OverviewHsnLogs } from 'src/sections/overview/overview-hsn-logs';
import { OverviewDutyLogs } from 'src/sections/overview/overview-duty-logs';

const Page = () => {
  const auth = useAuth();
  const [values, setValues] = useState({
    hs_code: 0,
    duty_calc: 0
  });

  useEffect(() => {
    async function fetchData() {
      const response = await auth.getAccountSummary();
      if (!response.ok) {
        const responseData = await response.json();
        const err = new Error(responseData.error || 'An error occurred');
        err.status = response.status;
        throw err;
      }
      const responseData = await response.json();
      console.log("----response => ", responseData);
      setValues(responseData);
    }
    fetchData();
  }, [])

  return (
    <>
      <Head>
        <title>
          IntGrow Corp.
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 3
        }}
      >
        <Typography
          color="#012970"
          variant='h3'
          sx={{ margin: "0 0 24px 24px" }}
        >
          Dashboard
        </Typography>
        <Container maxWidth="xl">
          <Grid
            container
            spacing={3}
            sx={{ marginBottom: '32px' }}
          >
            {dashboardItem.map((item) => {

              return (
                <Grid
                  xs={12}
                  sm={6}
                  lg={2}
                  key={item.title}
                >
                  <OverviewBudget
                    title={item.title}
                    icon={item.icon}
                    value={item.value}
                    sx={{
                      height: '100%',
                      boxShadow: '0px 0 30px rgba(1, 41, 112, 0.4) !important',
                      borderRadius: '0'
                    }}
                  />
                </Grid>
              );
            })}
          </Grid>

          <Grid
            xs={12}
            md={12}
            lg={8}
            sx={{ marginBottom: '32px' }}
          >
            <OverviewHsnLogs
              heading="HS Code Finder"
              subheading="Recent searches"
              orders={values.hs_code}
              sx={{
                height: '100%',
                boxShadow: '0px 0 30px rgba(1, 41, 112, 0.4) !important',
                borderRadius: '0'
              }}
            />
          </Grid>

          <Grid
            xs={12}
            md={12}
            lg={8}
            sx={{ marginBottom: '32px' }}
          >
            <OverviewDutyLogs
              heading="Import Duty Calculator"
              subheading="Recent searches"
              orders={values.duty}
              sx={{
                height: '100%',
                boxShadow: '0px 0 30px rgba(1, 41, 112, 0.4) !important',
                borderRadius: '0'
              }}
            />
          </Grid>

          <Grid
            xs={12}
            md={12}
            lg={8}
            sx={{ marginBottom: '32px' }}
          >
            <OverviewDutyLogs
              heading="Export Duty Calculator"
              subheading="Recent searches"
              orders={values.fta}
              sx={{
                height: '100%',
                boxShadow: '0px 0 30px rgba(1, 41, 112, 0.4) !important',
                borderRadius: '0'
              }}
            />
          </Grid>

        </Container>
      </Box>
    </>
  )
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
