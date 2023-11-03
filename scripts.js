console.log("js added");
const apiKey = process.env.NEWS_API_KEY;
const apiURL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

async function fetchNews(){
    try{
        let response = await fetch(apiURL);
        let newsData = await response.json();
        console.log(newsData);
        displayNews(newsData.articles);

    }
    catch(err){
        console.error(err);

    }
}
function displayNews(articles) {
    const newsDiv = document.querySelector('#news');
    for (const article of articles) {
        const articleDiv = document.createElement('div');

        //create and append a headline to the articleDiv
        const title = document.createElement('h4');
        title.textContent = article.title;
        articleDiv.appendChild(title);
    
      // TODO: Use document.createElement and appendChild to create and append more elements
  
      newsDiv.appendChild(articleDiv);
    }
}
fetchNews();