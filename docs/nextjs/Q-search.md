## Static Search

We have to know the data link.

getStaticProps(just like server controller and we only get data here) > Component(cannot get local data but refer to search event)

How to do? Only one approach

- That is get all posts from static props, and base on these post data to search.
- We need to write a seperate func for posts not from local post repository.
