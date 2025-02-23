import { IHeroProps } from "../components/Hero"
import thumbnail from '../assets/hero/thumbnail.png'
import network from '../assets/hero/network.png'
import logo from '../assets/hero/logo.png'

const hero: IHeroProps = {
  images: {
    thumbnail,
    logo,
    network,
  },
  title: 'هانیبال | Hannibal',
  description: 'ویل گراهام ، یک متخصص جنایی FBI ، توانایی غیرقابل انکار و همدردی با دکتر هانیبال لکر ، روانپزشک پزشکی قانونی را دارد. با این حال ، او از این که آدمخوار است آگاهی ندارد و ویل گراهام',
  tags: [
    'روانشناسی',
    'وحشت',
    'علمی تخیلی',
    'دلهره‌آور'
  ],
  metaData: {
    likes: 56,
    IMDBbRate: 8.2,
    time: '43 دقیقه',
    onAirDuration: {
      start: 2013,
      end: 2015
    },
    total: {
      seasonTotal: 3,
      episodeTotal: 39
    },
    hasDubbed: true,
    hasEnded: true,
    isPG13: false,
    madeIn: 'آمریکا'
  }
}
export default hero