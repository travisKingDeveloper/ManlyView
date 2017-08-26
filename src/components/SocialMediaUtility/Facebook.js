import React from 'react';
import FacebookProvider, { Like } from 'react-facebook';

export default function Facebook(props) {
  const style = {
    display: 'inline-block'
  }
  return (
    <span style={style}>
      <FacebookProvider appId='1955380901344794'>
        <Like href='http://www.facebook.com/themanlyview/' colorScheme='dark' share />
      </FacebookProvider>
    </span>
  );
}
