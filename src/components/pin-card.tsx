import { Box, createStyles, Group, Title } from '@mantine/core'
import type { NextPage } from 'next'
import Head from 'next/head'
import { mainActions } from '../../reducers'
import { useAppSelector } from '../../store/hooks'
import { wrapper } from '../../store/store'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'




const useStyles = createStyles((theme) => ({
    Container: {
        marginTop: 10,
    },
    PinCard: {
        height: 180,
        margin: 5,
        backgroundColor: '#fff',
        borderRadius: 20,
        // boxShadow: `0 1px 5px 0 ${theme.colors.gray[3]}`
    },

    InnerCardGroup: {
        width: '100%',
        display: 'flex'

    },

    PinImage: {
        padding: 10,
        height: 180,
        flex: 1,
        borderRadius: 20,
        backgroundColor: theme.colors.indigo[5],
    },
    PinBody: {
        padding: 10,
        height: 180,
        flexBasis: '30%',
        borderRadius: 20,
        backgroundColor: theme.colors.indigo[5],
    }
}))


type Props = {
    pin: any,
    index: number
}
const PinCard = ({ pin, index }: Props) => {

    const { classes } = useStyles()
    const pinsList = [1, 2, 3, 4, 5, 6, 7];

    const isEven = (index: number) => index % 2 === 0;
    const isOdd = (index: number) => !isEven;

    return (
        <Box className={classes.Container}>
            <Head>
                <title>Pinstree</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Box className={classes.PinCard}>
                <Box className={classes.InnerCardGroup}>
                    <Box className={classes.PinImage} sx={{ order: isOdd(index) ? 1 : 2 }}>
                        
                    </Box>
                    <Box className={classes.PinBody} sx={{ order: isEven(index) ? 2 : 1 }}>

                    </Box>
                </Box>
            </Box>
        </Box>

    )
}

export default PinCard

