import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'

import YTSearch from 'youtube-api-search'

import VideosList from './components/videos_list'

const API_KEY='AIzaSyDl8CULi6Q2Pm_JPsbu2icUA3lH_PESaVw';



class App extends Component{
   constructor(props){
     super(props);
     this.state={videos:[]};
     YTSearch({key:API_KEY,term:'surboard'},(videos)=>{
     this.setState({videos})

     });

   }
   render(){
   return (
     <div>Hi!
   <SearchBar/>
   <VideosList videos={this.state.videos}/>
     </div>
   );
   }


}


ReactDOM.render(<App/>,document.querySelector('.container'))
