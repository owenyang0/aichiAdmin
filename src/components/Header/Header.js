import React from 'react'

import classnames from 'classnames/bind'
import classes from './Header.scss'

const cx = classnames.bind(classes)

const menus = [
  {
    link: '/',
    name: 'Dashboard'
  }, {
    link: '/',
    name: 'Users'
  }, {
    link: '/',
    name: 'Transaction'
  }, {
    link: 'https://travis-ci.org/owenyang0/aichiAdmin',
    name: 'Travis'
  }, {
    link: 'https://github.com/owenyang0/aichiAdmin',
    name: 'Github'
  }
]

type Props = {

};
export class Header extends React.Component {
  props: Props;

  render () {
    return (
      <div className={cx('headroom')}>
        <div className={cx('inner')}>
          <div className={cx('logo')}>
            <a href='/'>AichiAdmin</a>
          </div>
          <nav className={cx('nav')}>
            <ul className={cx('menu')}>
              {
                menus.map((m, idx) => {
                  return (
                    <li key={idx}>
                      <a className='btn' href={m.link}>{m.name}</a>
                    </li>
                  )
                })
              }
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default Header
