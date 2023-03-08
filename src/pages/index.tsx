

import { Box, createStyles } from '@mantine/core'

import Head from 'next/head'
import { mainActions } from '../../reducers'
import { Pin } from '../../reusable/interfaces'
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
   // width:'100%',
    marginTop: 10,
    //display:'grid',
    //gridTemplateColumns:'repeat(2,1fr)'
    
  },

}))


const IndexPage = () => {
  const appName = useAppSelector((state) => state.MainReducer.appName)
  const { classes } = useStyles()

  const pinsList: Pin[] = [
    { name: 'pin one', image: 'https://res.cloudinary.com/alexandriah65/image/upload/c_thumb,h_386,w_686/f_webp/v1/images/baew1an8rydsevv47bf2' },
    { name: 'pin one', image:"https://res.cloudinary.com/alexandriah65/image/upload/c_thumb,h_386,w_686/f_webp/v1/images/wfljegjqsmjlnjgqjije"},
    { name: 'pin one', image:"https://res.cloudinary.com/alexandriah65/image/upload/c_thumb,h_386,w_686/f_webp/v1/images/arcq31g7e7bugll8aeu1"},
    { name: 'pin one', image:"https://res.cloudinary.com/alexandriah65/image/upload/c_thumb,h_386,w_686/f_webp/v1/images/fshlbfxsdwfwpy4fru9e"},
  ]

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
