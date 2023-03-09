

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

type Props = {
    pins: Pin[]
}

function RenderPins({ pins }: Props) {
    const appName = useAppSelector((state) => state.MainReducer.appName)
    const { classes } = useStyles()



    return (

        <Box className={classes.Container}>
            {pins.map((pin, index) => (
                <PinCard key={index} pin={pin} index={index} />
            ))}
        </Box>
    )
}

export default RenderPins
