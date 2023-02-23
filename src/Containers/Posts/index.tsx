
import { PageWrapper } from 'Components/Common/PageWrapper';
import { PostsList } from 'Components/Posts';
import React from 'react';

export const Posts = () => {
  return <div className='page_wrapper'>
    <PageWrapper>
    <PostsList/>
    </PageWrapper>
      </div>;
};
