import { Box, Button, createStyles, Group, Text, Title } from '@mantine/core'
import type { NextPage } from 'next'
import Head from 'next/head'
import { mainActions } from '../../reducers'
import { useAppSelector } from '../../store/hooks'
import { wrapper } from '../../store/store'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

import { Image, Transformation } from 'cloudinary-react'
import { Pin } from '../../reusable/interfaces'
import Avatar from './avatar'
import { MdAdd } from 'react-icons/md'


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
        width:'100%',
        display: 'flex',
        gap: 5
    },

    PinImage: {
        width:'80%',
        padding: 1,
        height: 180,
        //flexBasis: '60%',
        borderRadius: 20,
        //backgroundColor: theme.colors.indigo[5],
        boxShadow: `0 1px 5px 0 ${theme.colors.gray[3]}`
    },
    PinBody: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        height: 180,
        flexBasis: '20%',
        borderRadius: 20,
       // backgroundColor: theme.colors.indigo[2],
        boxShadow: `0 1px 5px 0 ${theme.colors.gray[3]}`
    },

    AddPinButton: {
        fontSize: 16,
        fontWeight:600,
        height: 50,
        // width: 50,
        //borderRadius: '50%'
        transform: 'rotate(90deg)',
        borderRadius: 20,
        transition: '0.3s all'
    }
}))


type Props = {
    pin: Pin,
    index: number
}
const PinCard = ({ pin, index }: Props) => {

    const { classes } = useStyles()


    const isEven = (index: number) => index % 2 === 0;
    const isOdd = (index: number) => !isEven;

    return (

        <Box className={classes.PinCard}>
            <Box className={classes.InnerCardGroup}>
                <Box className={classes.PinImage} sx={{ order: isOdd(index) ? 1 : 2 }}>
                    <Image cloudName="alexandria65" publicId={pin.image} style={{ width: '100%', height: '100%', borderRadius: 20 }} >
                        <Transformation width="686" height="386" crop="thumb" />
                        <Transformation fetchFormat="webp" />
                    </Image>
                </Box>
                <Box className={classes.PinBody} sx={{ order: isEven(index) ? 2 : 1 }}>
                    <Avatar />
                    <Button leftIcon={<MdAdd size={20} />} variant="default" className={classes.AddPinButton} >
                        <Text sx={{ transform: 'rotate(-90deg)', }}>Pin</Text>
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default PinCard

