import { Box, Avatar as AvatarIcon, createStyles, Group, Title } from '@mantine/core'
import type { NextPage } from 'next'
import Head from 'next/head'
import { mainActions } from '../../reducers'
import { useAppSelector } from '../../store/hooks'
import { wrapper } from '../../store/store'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

import { Image, Transformation } from 'cloudinary-react'
import { Pin } from '../../reusable/interfaces'


const useStyles = createStyles((theme) => ({
    PinAvatar: {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginTop:15,
        height: 50,
        width: 50,
        borderRadius:'50%',
        border: '1px solid #ddd',
        boxShadow: '0 1px 3px 0 #ddd',
        backgroundColor:'#fff'
    },
    InnerAvatar: {
        height: 40,
        width: 40,
        borderRadius:'50%',
    },

}))


type Props = {
    
}
const Avatar = ({ }: Props) => {

    const { classes } = useStyles()


    const isEven = (index: number) => index % 2 === 0;
    const isOdd = (index: number) => !isEven;

    return (

        <Box className={classes.PinAvatar}>
           
        </Box>
    )
}

export default Avatar

