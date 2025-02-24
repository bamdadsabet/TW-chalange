import { IEpisodeCardProps, ISeason } from "../components/Episodes"
import ep1Img from '@assets/episodesThumbnails/ep1.png'


const episodeSeeder = () => {
  const res: IEpisodeCardProps[] = [
    {
      title: 'مرد آهنی: انتقام برای آزادی',
      episode: 1,
      link: '#',
      thumbnail:ep1Img ,
      time: '1:32:48',
    },
  ]
  for (let i = 1; i < 20; i++) {
    res.push({
      title: 'مرد آهنی: انتقام برای آزادی',
      episode: i,
      link: '#',
      subtitle: 'رستاخیز فرشتگان',
      views: `${i + 1  * 12} هزار بازدید`,
      rate: 3 * i,
      thumbnail: `@assets/episodesThumbnails/ep${i + 1}.png`,
      time: '1:32:48',
    })
  }
  return res
}

const seasonSeeder = (seasonAmount: number, episodesList: IEpisodeCardProps[]) => {
  const res = []
  for (let i = 0; i < seasonAmount; i++) {
    res.push({
      season: i + 1,
      episodes: episodesList
    })
  }
  return res
}

const episodesSeed = episodeSeeder()


const episodes: ISeason[] = seasonSeeder(4, episodesSeed)

export default episodes