

import { Box, createStyles } from '@mantine/core'

import Head from 'next/head'
import { mainActions } from '../../reducers'
import { useAppSelector } from '../../store/hooks'
import { wrapper } from '../../store/store'
import Layout from '../components/layout'
import PinCard from '../components/pin-card'

export const getServerSideProps = wrapper.getServerSideProps(({ dispatch }) => async (params) => {
  await dispatch(mainActions.setAppName('LEEFTUP WEB SERVICES'))
  return {
    props: {

    }
  }
})


const useStyles = createStyles((theme) => ({
  Container: {
    marginTop: 10,
  },

}))


const IndexPage = () => {
  const appName = useAppSelector((state) => state.MainReducer.appName)
  const { classes } = useStyles()

  const pinsList = [1, 2, 3, 4, 5, 6, 7]

  return (
    <Layout>
      <Box className={classes.Container}>
        <Head>
          <title>Pinstree</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {pinsList.map((pin, index) => (
          <PinCard key={index} pin={pin} index={index} />
        ))}
      </Box>

    </Layout>
  )
}

export default IndexPage
