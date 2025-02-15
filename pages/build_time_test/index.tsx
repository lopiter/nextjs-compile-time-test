import dynamic from 'next/dynamic'
import Link from 'next/link'

import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: { 'theme': 1},
    }
}

function Home({ theme }) {
    const BodyDefault = dynamic(() => import(`components/${theme}/a`));
    return (
        <div>
            <BodyDefault></BodyDefault>
        </div>
    )
}

export default Home