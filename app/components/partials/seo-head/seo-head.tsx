import Head from 'next/head'
export default function SeoHead({ input }: any){
    
    return (<>
        <Head>
            <title>{ input.title ? input.title : 'Contract' }</title>
           
        </Head>
    </>)
}