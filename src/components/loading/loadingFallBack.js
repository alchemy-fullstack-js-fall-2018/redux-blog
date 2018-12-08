import Loading from './Loading';
import React from 'react';

export const loadingFallback = LoadingComponent => Component => {
  return function LoadingFallbackComponent(props) {
    if(props.loading) {
      return LoadingComponent(props);
    }
    console.log(props);
    return <Component {...props} />;
  };
};

export const loadingWithParagraph = loadingFallback(Loading);
