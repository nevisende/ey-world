import axios from 'axios';

const MAP_BASE_URL = 'https://maps.googleapis.com/maps/api/staticmap?size=400x400&maptype=hybrid';
const MAP_KEY_PARAM = process.env.MAP_KEY;

const UNSPLASH_BASE_URL = 'https://api.unsplash.com/search/';
const UNSPLASH_KEY_PARAM = process.env.UNSPLASH_KEY;

const unsplashApiClient = axios.create({
  baseURL: UNSPLASH_BASE_URL,
});

export const gifsObj = {
  0: [
    'https://media4.giphy.com/media/LNqsAdet5GSFu2UCIL/giphy.gif?cid=ecf05e4709elwrmzpoturhulyo2soujq2xfzj46eg8ejscmr&rid=giphy.gif&ct=g',
    'https://media1.giphy.com/media/ZPeVbUPxMitZo5vnoB/giphy.gif?cid=ecf05e4709elwrmzpoturhulyo2soujq2xfzj46eg8ejscmr&rid=giphy.gif&ct=g',
    'https://media1.giphy.com/media/l2Sq5GffrCyUMEXjW/giphy.gif?cid=ecf05e47ts1jox0veg6ofduedetl7gyllzli71hgk81hbema&rid=giphy.gif&ct=g',
    'https://media3.giphy.com/media/OszuS46DgdYbK/giphy.gif?cid=ecf05e47p70u3awwmjctvns3vesj6gj95wsf0p1m0l5344q2&rid=giphy.gif&ct=g',
  ],
  1: [
    'https://media3.giphy.com/media/J8FZIm9VoBU6Q/giphy.gif?cid=ecf05e47ptfhwf3l6dscz49x05sentq8gqq0b7w9s97v5jmc&rid=giphy.gif&ct=g',
    'https://media1.giphy.com/media/RgfGmnVvt8Pfy/giphy.gif?cid=ecf05e47seljlexeuqlkjp3w49jvs9kvcwmr4jxdqanxv9hv&rid=giphy.gif&ct=g',
    'https://media0.giphy.com/media/mCIjCgs3nWQWfJZvPA/giphy.gif?cid=ecf05e47o9zdj8rga25kw4dcr3daugqschvc599biorinwxe&rid=giphy.gif&ct=g',
  ],
  2: [
    'https://media3.giphy.com/media/LluZfzq5cmmFdZN3pi/giphy.gif?cid=ecf05e47vzbnnlx7ba01qf7ga0g79306oy4jp534l5johfbw&rid=giphy.gif&ct=g',
    'https://media4.giphy.com/media/iJgObTZUTGRGmWyEad/giphy.gif?cid=ecf05e47lc3aot9ebawv6vi9ys6nmbcsnxko2wla3elbau94&rid=giphy.gif&ct=g',
    'https://media0.giphy.com/media/JO93BOULrEzUJZyUeu/giphy.gif?cid=ecf05e470flyv0e0c1rweglrn2q47g9mz6zc5nzvhrpcvkhp&rid=giphy.gif&ct=g',
  ],
  3: [
    'https://media0.giphy.com/media/Koou4ZNMOrHu8/giphy.gif?cid=ecf05e47h6abnwy2yrpkr495m96q0uwpbtba0t1iaayeqdfa&rid=giphy.gif&ct=g',
    'https://media3.giphy.com/media/oFhhtO9coeE8wj17Y9/giphy.gif?cid=ecf05e47qvwdvd5q6rooz1ncjtl3wx8inz7k76ohddy3szvq&rid=giphy.gif&ct=g',
    'https://media4.giphy.com/media/WmORbXCvnVf6nXTbBS/giphy.gif?cid=ecf05e47h6abnwy2yrpkr495m96q0uwpbtba0t1iaayeqdfa&rid=giphy.gif&ct=g',
  ],
  4: [
    'https://media1.giphy.com/media/3o6ZsS8GFJKJeJoRQ4/giphy.gif?cid=ecf05e474h7ie7ppeccnzs3005kijrwdy8ljmorcbrkrsprj&rid=giphy.gif&ct=g',
    'https://media0.giphy.com/media/OPU6wzx8JrHna/giphy.gif?cid=ecf05e474h7ie7ppeccnzs3005kijrwdy8ljmorcbrkrsprj&rid=giphy.gif&ct=g',
    'https://media4.giphy.com/media/KDRv3QggAjyo/giphy.gif?cid=ecf05e474h7ie7ppeccnzs3005kijrwdy8ljmorcbrkrsprj&rid=giphy.gif&ct=g',
  ],
  5: [
    'https://media3.giphy.com/media/TPIGXoerZpL3sJXBwz/giphy.gif?cid=ecf05e47fdwf9pyh6lft929k2umcklos3lsc75ruk8cupdcv&rid=giphy.gif&ct=g',
    'https://media1.giphy.com/media/9JnWmvpPrYkiQ7hEF7/giphy.gif?cid=ecf05e47fdwf9pyh6lft929k2umcklos3lsc75ruk8cupdcv&rid=giphy.gif&ct=g',
    'https://media2.giphy.com/media/elV6SHPPz87nOYdaBC/giphy.gif?cid=ecf05e47fdwf9pyh6lft929k2umcklos3lsc75ruk8cupdcv&rid=giphy.gif&ct=g',
  ],
};

export const pollutionColors = {
  0: '#00E400',
  1: '#FFFF00',
  2: '#FF7E00',
  3: '#FF0000',
  4: '#99004C',
  5: '#7E0023',
};

export default class ImagesAPI {
  constructor() {
    this.mapImage = '';
    this.cityImage = '';
  }

  getMapImage(area) {
    this.mapImage = `${MAP_BASE_URL}&zoom=7&center=${area}${MAP_KEY_PARAM}`;
    return this.mapImage;
  }

  async getCityImageFromFirstResult(city) {
    const result = await unsplashApiClient.get(`/photos?query=${city}${UNSPLASH_KEY_PARAM}`);
    this.cityImage = result.data.results[0]?.urls.small;
    return this.cityImage;
  }
}
