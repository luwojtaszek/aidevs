import * as cheerio from 'cheerio';
import axios from 'axios';

const $ = cheerio.load((await axios.get('https://www.searchenginejournal.com/category/seo')).data);

const yesterdayStart = new Date();
yesterdayStart.setDate(yesterdayStart.getDate() - 1);
yesterdayStart.min;
yesterdayStart.setHours(0, 0, 0, 0);

const todayStart = new Date();
todayStart.setHours(0, 0, 0, 0);

const articlesFromYesterday = [];

$('#archives-wrapper article').each((index, element) => {
  const link = $(element).find('h2 > a').attr('href').trim();
  const articleTitle = $(element).find('h2 > a').text().trim();
  const publishDate = $(element).find('.entrydate').text().trim();
  let isFromYesterday = false;

  try {
    const parsedPublishDate = new Date(Date.parse(publishDate.replace(/,/g, '')));
    isFromYesterday = parsedPublishDate >= yesterdayStart.getTime() && parsedPublishDate < todayStart.getTime();
  } catch (e) {}

  if (isFromYesterday) {
    articlesFromYesterday.push({
      publishDate,
      link,
      articleTitle,
    });
  }
});

for (let i = 0; i < articlesFromYesterday.length; i++) {
  const article = articlesFromYesterday[i];
  try {
    const $article = cheerio.load((await axios.get(article.link)).data);
    $article('a').attr('href', '');
    $article('script, img, iframe, style, link[rel="stylesheet"], audio, video').remove();

    $article
      .root()
      .contents()
      .filter((c) => c.type === 'comment')
      .remove();

    article.content = $article('article.post header').html() + $article('article.post .entrycontent').html();
  } catch (e) {
    article.content = '';
  }
}

return articlesFromYesterday.filter((article) => article.content);
console.log(articlesFromYesterday.filter((article) => article.content));
