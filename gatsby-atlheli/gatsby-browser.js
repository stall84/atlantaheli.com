import React from 'react';
import Layout from './src/components/Layout';
import './src/assets/scss/main.scss';

export const wrapPageElement = ({ element, props }) => {

    return <Layout {...props}>{element}</Layout>
}