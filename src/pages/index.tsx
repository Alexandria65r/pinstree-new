import { Box, Title } from '@mantine/core'
import type { NextPage } from 'next'
import Head from 'next/head'
import { mainActions } from '../../reducers'
import { useAppSelector } from '../../store/hooks'
import { wrapper } from '../../store/store'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

export const getServerSideProps = wrapper.getServerSideProps(({ dispatch }) => async (params) => {
  await dispatch(mainActions.setAppName('LEEFTUP WEB SERVICES'))
  return {
    props: {

    }
  }
})


const IndexPage: NextPage = () => {
  const appName = useAppSelector((state) => state.MainReducer.appName)
  return (<Layout>
    <Box className={styles.container}>
      <Head>
        <title>Pinstree</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title order={1}> pinstree🎉</Title>
    </Box>

  </Layout>
  )
}

export default IndexPage
