---
desc: "How to create a new github repository from the command line shell, github api, authentication api, oauth"
layout: post
title: "Create a new Github repository from the command line"
date: 2014-01-05 18:31:53
---

The steps explained in this guide can be automated by a handy utility called [hub](https://hub.github.com/).

But if you want to get your hands dirty with the Github API, this article is for you.

_________

###About the Github API:

- HTTPS and HTTPS only.
- response comes shipped in the JSON format
- the API endpoint to create a new repository is [https://api.github.com/user/repos](https://api.github.com/user/repos).
- with the HTTP method `POST` you can create a new repo (if authenticated correctly)
- request to the non-public API must be authenticated, either with basic authentication or oauth

###curl parameters

We will use `curl` to make the request.
The command consists of the parts/parameters (commands in square brackets are shortcuts):

####--user [-u]
As written above, every request to the private API must be authenticated.
Provide your username afterwards and you will be prompted for your password by curl.

```
--user username
```

Additionally if you want to write your password straightaway, you can write it like this:

```
--user username:password
```

If you don't have 2-factor-authentication activated this gets a lil bit trickier, but don't fear. [Create a new OAuth access Token](https://github.com/settings/applications) and provide it in the following way:

```
--user YOUR-OAUTH-TOKEN:x-oauth-basic
# or if you saved it in a file
--user `cat ~/path-to-oauth-access-token`:x-oauth-basic
# or in the header
curl -H "Authorization: token YOUR-OAUTH-TOKEN"
```

*Now if you followed the steps correctly you can get the private infos about your account with this command:*
`curl --user username https://api.github.com/user/`

####--request [-X]
Set the HTTP method with which you want to access to the API.

We just need to set it to **POST** and we're good to go.

####--data [-d]
Since we are posting data, well I just said it, we need to define the data.

The data will be structured in JSON.  All the valid fields can be found [on the official API doc](http://developer.github.com/v3/repos/#create).
The fields we need are *name*, and optionally *private*.

###Assembling the parameters
```
curl
    --user username:password
    --request POST
    --data '{
        "name" : "my-new-repo-created-from-the-command-line",
        "private" : "true"
    }'
    https://api.github.com/user/repos/
```
