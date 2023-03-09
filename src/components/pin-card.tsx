import { useState, useRef, MutableRefObject } from 'react'
import { Box, Button, ActionIcon, createStyles, Group, Text, Title } from '@mantine/core'
import type { NextPage } from 'next'
import Head from 'next/head'
import { mainActions } from '../../reducers'
import { useAppSelector } from '../../store/hooks'
import { wrapper } from '../../store/store'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import { Image, Transformation } from 'cloudinary-react';

import { Pin } from '../../reusable/interfaces'
import Avatar from './avatar'
import { MdAdd } from 'react-icons/md'
import { FiShare } from 'react-icons/fi'
import Link from 'next/link'


const useStyles = createStyles((theme) => ({
    Container: {
        marginTop: 10,
    },
    PinCard: {
        height: 180,
        margin: 8,
        //backgroundColor: '#fff',
        borderRadius: 20,
        // boxShadow: `0 1px 5px 0 ${theme.colors.gray[3]}`
    },

    InnerCardGroup: {
        width: '100%',
        display: 'flex',
        gap: 8
    },

    PinImage: {
        width: '80%',
        padding: 1,
        height: 180,
        //flexBasis: '60%',
        borderRadius: 20,
        //backgroundColor: theme.colors.indigo[5],
        boxShadow: `0 1px 5px 0 ${theme.colors.gray[3]}`
    },
    PinBody: {
        backgroundColor: '#fff',
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
        fontWeight: 600,
        padding: '0 10px',
        width: 53,
         height: 53,
        borderRadius: 20,
        transition: '0.3s all'
    },
    LeftIcon: {
        margin: 0
    }
}))


type Props = {
    pin: Pin,
    index: number
}
const PinCard = ({ pin, index }: Props) => {

    const { classes } = useStyles()
    //const BtnRef:MutableRefObject<HTMLButtonElement> = useRef()

    const isEven = (index: number) => index % 2 === 0;
    const isOdd = (index: number) => !isEven;
    const [isFocused, setIsFocused] = useState(false)

    return (

        <Box className={classes.PinCard}>
            <Box className={classes.InnerCardGroup}>
                <Box className={classes.PinImage} sx={{ order: isOdd(index) ? 1 : 2 }}>
                    <Link href="pin/pin-id">
                        <Image cloudName="alexandria65" publicId={pin.image} style={{ width: '100%', height: '100%', borderRadius: 20 }} >
                            <Transformation width="686" height="386" crop="thumb" />
                            <Transformation fetchFormat="webp" />
                        </Image>
                    </Link>
                </Box>
                <Box className={classes.PinBody} sx={{ order: isEven(index) ? 2 : 1 }}>
                    <Avatar />
                    <ActionIcon

                        onFocus={() => setIsFocused(true)}
                        onBlurCapture={() => setIsFocused(false)}
                        onBlur={() => setIsFocused(false)}
                        sx={{ backgroundColor: '#e2e6ea' }}
                        className={classes.AddPinButton}
                    //variant="gradient"
                    >
                        <FiShare size={20} />
                    </ActionIcon>
                    <ActionIcon

                        onFocus={() => setIsFocused(true)}
                        onBlurCapture={() => setIsFocused(false)}
                        onBlur={() => setIsFocused(false)}
                       
                        variant="gradient"
                        className={classes.AddPinButton}
                    >
                        <MdAdd size={23} />
                    </ActionIcon>

                </Box>
            </Box>
        </Box>
    )
}

export default PinCard

