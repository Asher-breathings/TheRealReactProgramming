import React, { useEffect, useReducer } from 'react';
import { getnextFriend } from '../../common/mockData';
import store from '../../common/store';
import FriendList from '../component/FriendList';
import { addFriend } from '../state';
export default function FriendMain() {
  const [, forceUpdate] = useReducer(v => v + 1, 0);
  useEffect(() => {
    let prevFriends = store.getState().friend.friends;

    const unsubscribe = store.subscribe(() => {
      const friends = store.getState().friend.friends;
      if(prevFriends !== friends) {
        forceUpdate()
      }
      prevFriends = friends;
    });
    return () => unsubscribe();
  }, []);
  
  function onAdd() {
    const friend = getnextFriend();
    store.dispatch(addFriend(friend));
  }
  console.log("FriendMain render");
  const friends = store.getState().friend.friends;
  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <FriendList friends={friends} />
    </div>
  )
};
