import React, { useEffect, useMemo, useState } from 'react';


import PostList from '../PostList';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';

import MySelect from '../UI/select/MySelect';
import PostFilter from '../PostFilter';
import MyModal from '../UI/MyModal/MyModal';
import { usePosts } from '../../hooks/usePosts';
import axios from 'axios';
import PostService from '../../API/PostService';
import Loader from '../UI/Loader/Loader';
import { useFetching } from '../../hooks/useFetching';
import { getPageCount, getPagesArray } from '../../utils/pages';



function Posts() {

  const [posts, setPosts] = useState([])

  const [filter, setFilter] = useState({ sort: '', query: '' })

  const [modal, setModal] = useState(false);

  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  let pagesArray=getPagesArray(totalPages);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data)
    const totalCount=response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })

  useEffect(() => {
    fetchPosts()
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }



  //ПОЛУЧАЕМ post ИЗ ДОЧЕРНЕГО КОМПОНЕНТА 
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    <div className="App">

      {/* <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal> */}
      <strong style={{marginTop: '50px'}}>For LAD24</strong>
      <div style={{marginTop: '100px'}}>Hover on question for answer</div>

      <hr style={{ margin: '15px 0' }} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {postError &&
        <h1>Произошла ошибка ${postError}</h1>
      }
      {isPostsLoading
        ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><Loader /></div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Quiz" />

      }

      <div className="page__wrapper">
      {pagesArray.map(p =>
        <span className="page">{p}</span>
        )}
      </div>


    </div>
  );
}

export default Posts;
