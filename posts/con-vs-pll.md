---
title: 'Yet another concurrency vs parallelism blog'
date: '2021-04-25'
---


Often people confuse concurrency with parallelism and vice-versa, so I have written this post to help you undertsand the difference and have the best of both.

## TL;DR

For people in hurry,

- **When you divide the work, its parallelism.**
- **When you reduce the wait time between multiple work/tasks, its concurrency.**

## Story time

Lets consider a scenario where you have to finish 2 tasks:

- Clean the house

- Listen to a podcast

### Sequential

You first clean the house and then listen to the podcast.
Simple right?, I wish everything was just like this.

### Concurrency 1

You put in your airpods and now you are doing both the things together. This is concurrency not parallelism since you just **reduced the wait time** (taken by house cleaning work) before the podcast task.

### Parallelism 1

You call your friend for help, and now both of you have **divided the cleaning work**, thats parallelism.

### Parallelism 2

Both you and your friend after finishing the cleaning work listen to the podcast on your separate phones.

 This is arguable and is more related to the perspective.
 Because in this situation, two distinct parties completing two distinct job (even though the job is same) without any relation to eash other's job, and hence could be referred as being in isolation or independent and not parallel.

### Concurrency 2

But, Let say your friend does not have podcast app on his phone, and you guys are listening from same phone. This scenario is concurrency, since doing it one after another will result in wait time.

## Conclusion

If you have been following the story, I think by now you have pretty much identified the difference.

- ### Parallelism is when you divide the work

- ### Concurrency is When you reduce the wait time between multiple tasks

### And for those who were waiting for the `Best of both worlds` scenario

### Parallelism and Concurrency

You attached your phone to the home theatre and now you and your friend are in the most optimal scenario. That is, cleaning as well as listening to podcast at the same time.

## Closing

Thanks for coming by, I hope you found this helpful and you will be able to use `best of both worlds` when working on a optimization problem.

### Motivation

Two years ago, I started learning javascript because it was not easy to achive the non-blocking IO in python and building APIs with python that could add a lot of wait time.

Say no more python peeps, [FastAPI](https://fastapi.tiangolo.com/) is here, Have some time to kill? Check their [concurrency and burgers](https://fastapi.tiangolo.com/async/#concurrency-and-burgers) post which motivated me to write this blog.
