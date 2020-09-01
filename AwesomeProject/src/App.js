import React from 'react';
import { ArticleCard } from './components';
import { Provider } from 'react-redux';
const App = () => {
  return (
    <Provider>
      <ArticleCard
        imageUrl='https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188327.jpg'
        title="News Title"
        source="ABC"
        timeago="2020-08-28T11:26:37Z"
      />
    </Provider>
  )
}

export default App;