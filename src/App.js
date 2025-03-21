import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

export function Link({link,label}){
 return <a href = {link}>{label}</a>
}

export default function TopMenu (){
  return (
    <span className='pagetop'>
      <b className='rnname'>
        <a href='news'>React News</a>
        </b>
      <Link link="new"label= "new" />  
      |
      <Link link="past"label= "past" />  
      |
      <Link link="comments"label= "comments" />  
      |    
      <Link link="ask"label= "ask" />  
      |
      <Link link="show"label= "show" />  
      |
      <Link link="jobs"label= "jobs" />  
      |
      <Link link="submit"label= "submit" />  

    </span>
  );
}
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<TopMenu />);
