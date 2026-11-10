"use strict";
const newPost = (post, addedAt = Date()) => (Object.assign(Object.assign({}, post), { addedAt }));
const firstPost = {
    id: 1,
    author: 'Vera',
};
console.log(newPost(firstPost));
