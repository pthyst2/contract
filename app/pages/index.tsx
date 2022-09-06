import type { NextPage } from 'next';
import SeoHead from '../components/partials/seo-head';
const Home: NextPage = () => {
  //#region SEO
  const seo = {
    title: 'Contract'
  }
  //#endregion
  return (
     <>
     <SeoHead input={seo} />
     <div className="text-[#ff0000] text-[24px]"><p>Den roi lai di</p></div></>
  )
}

export default Home
