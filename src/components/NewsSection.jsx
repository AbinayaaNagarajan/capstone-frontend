import React from 'react';

const NewsSection = () => {
  const newsData = [
    {
      id: 1,
      title: 'Upcoming Competition',
      content: 'North South Foundation is Orgainizing Contest for all grades on March 23 and March 24, Please click on below link for more details',
      link: 'https://www.northsouth.org/public/LandingPage/Contest', // Add the link for news 1
    },
    {
      id: 2,
      title: 'Reference Books',
      content: 'Here is the link to buy GMAS book from Amazon for Grade 3: ',
      link: 'https://www.amazon.com/Georgia-Milestones-Assessment-System-Test/dp/1945730722/ref=sr_1_1?dib=eyJ2IjoiMSJ9.-FRWWJrVFSxRNnQQblaldZkK4GOUR4eYwfgkfoQbcmCsrgNm9xiPejtjMC-awXT8lTDWnVbhR6cMQzdKSL4YQe_J7GutmxnfJLK1hJDPcnzpKkcMuouI8HjoPGDDlVPmmok6R4vIGG1bJaFE0trkd74-BgH2RT7GUH6beAIqq5cLz3OJlyKKiBx3GL_Ff6lbgYiIGpKRVYVG6NOuDOtC0e76E26TnTSRLKdKLdKn-3c.Csn5cgheKXMD2RSxufWmCjWDxljwxWb94EJuvzx7olw&dib_tag=se&keywords=GMAS+grade+3&sr=8-1', // Add the link for news 2
    },
    // Add more news items as needed
  ];

  return (
    
    <div className="news-section">
      <h2>Latest News</h2>
      <ul>
        {newsData.map((news) => (
          <li key={news.id} className="news-item">
            <h3>{news.title}</h3>
            <p>{news.content} <a href={news.link} target="_blank" rel="noopener noreferrer">{news.link}</a></p>
          </li>
        ))}
      </ul>
    </div>


  );
};

export default NewsSection;
