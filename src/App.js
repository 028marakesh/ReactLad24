import React, { useEffect, useMemo, useState } from 'react';
import './styles/App.css';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import { usePosts } from './hooks/usePosts';
import axios from 'axios';
import Loader from './components/UI/Loader/Loader';
import { useFetching } from './hooks/useFetching';
import { getPageCount, getPagesArray } from './utils/pages';
import { BrowserRouter, Switch,   Route} from "react-router-dom";
import PassedPosts from './components/pages/PassedPosts';
import Posts from './components/pages/Posts';
import Navbar from './components/UI/Navbar/Navbar';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>

          <Route path="/passedposts"><PassedPosts/></Route>
          <Route path="/posts"><Posts/></Route>
        
      </Switch>




    </BrowserRouter>
  )

}

export default App;
