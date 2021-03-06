import React from 'react';
import './FollowingItem.css';
import { Link, useRouteMatch } from 'react-router-dom';

function FollowingItem({ user }) {

  const { url } = useRouteMatch();
  // console.log(user)

  return (
    <div className="following-item">
      <Link to={`user/${user._id}`} style={{ textDecoration: 'none' }}>
        <div className="following-item__container">
          <img
            className="following-item_avatar"
            src={user.avatar || 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}
            alr={user.userName}
          />
          <h3 className="following-item__name">{user.userName || "Подписчик"}</h3>
          <p className="following-item__text">Количество фильмов: <span style={{ fontWeight: '600' }}>{user.ratingFilms.length || "Много"}</span></p>
        </div>
      </Link>
    </div>
  );
}

export default FollowingItem;
