import React from 'react';

export default function Footer() {
  return (
    <div className='ui inverted vertical footer segment'>
      <div className='ui container'>
        <div className='ui stackable inverted center aligned grid'>
          <div className='eight wide column'>
            <h4 className='ui inverted header'>Created with &#10084; by Jatin Gidwani</h4>
            <div className='ui inverted link list'>
              <a className='ui button' href='https://github.com/jatin11gidwani'>Github</a>
              <a className='ui button' href='https://www.linkedin.com/in/jatin11gidwani/'>LinkedIn</a>
            </div>
            <p>
              Udacity Readable project from React Nanodegree
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}