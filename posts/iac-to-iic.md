---
title: 'Journey from Infra-as-Code (IAC) to Infra-is-Code (IIC) on AWS Cloud'
date: '2021-10-26'
---

[![CDK](https://d2908q01vomqb2.cloudfront.net/0716d9708d321ffb6a00818614779e779925365c/2018/11/14/AWS-CDK.png)](https://docs.aws.amazon.com/cdk/latest/guide/home.html)
[![SST](https://docs.serverless-stack.com/img/logo.svg)](https://docs.serverless-stack.com/)

We had been using AWS and AWS SAM for our project for some time but still, a lot of changes were made directly in the console.

When I started working in the team, there were some challenges I faced concerning the development process.

- Since everything was on AWS, the development and debugging process was slow when using the console.
- If writing code locally, there was no way to instantly debug it.
- Unit testing this new application development model was not easy.
- Deployments with Jenkins felt like overkill since cloud formation does the job of finding `change-sets` and only deploying the differences.

After some contemplation I decided to start fresh on a new infrastructure code, with some constraints in mind:
- No manual action from AWS Console.
- Developers during the development process should be able to provision their infrastructure. (because it's a serverless model)
- Javascript as the programming language.

Soon I landed on [**AWS-CDK**](https://docs.aws.amazon.com/cdk/latest/guide/home.html). And my initial impressions were "This is exactly what I was looking for!"

- No more templating language (JSON/ YAML), pure native code. (JAVASCRIPT)
- Unit testable infrastructure 🤩
- No manual console process.
- CDK support multi-language
- CDK hides the complexity
- CDK has a fast release cycle
- CDK is based on cloud formation

## HOW CDK support multi-languages

[JSII](https://github.com/aws/jsii) is a framework developed by the technology that enables the CDK to deliver polyglot libraries from a single codebase!

## Wait, what is happening here?

- AWS primarily uses Cloudformation which is written in JSON.
- JSON is Javascript Object Notation, basically Javascript
- AWS CDK is a wrapper around cloud formation in Javascript.
- JSII is a Javascript framework that allows code in any language to naturally interact with JavaScript classes.

We write Python, Java, C# infrastructure code that gets converted into Javascript using JSII that CDK understands which again gets converted into JSON that AWS Cloudformation understands.

### This brings some problems with it!

- [Weird documentation problems](https://github.com/aws/jsii/issues/1821)
- [Library compatibility issue](https://github.com/blimmer/cdk-datadog-integration/issues/15)

### Why typescript / javascript is better?

All components are written with typescript at first, so you are sure that they will work for you. With other languages, it works perfectly if you are using default CDK constructs but as soon as you start using 3rd party constructs it is less certain that it will work.

I would recommend using Javascript for infrastructure code even if some of the functionalities (lambdas) are in Python or Java.

## What about Local Development Problem?

Yeah, the local development process problem is still a concern and there are some solutions out there addressing them:
1. [Serverless-Framework](https://www.serverless.com/)
2. [LocalStack](https://localstack.cloud/)
3. SAM Local Invoke

These helped to an extent but still did not feel right.

### Welcome [Serverless Stack Toolkit(SST)](https://docs.serverless-stack.com/)
[SST](https://docs.serverless-stack.com/) is a tool built around AWS CDK and beautifully resolves local development problems by proxying lambda requests using a WebSocket connection. Everything else runs on AWS.

## Hey, I thought this article was about Infra-is-code!

YES, it is. This article explains the journey from a manual process to a place where Infrastruce is no more a template, its core programming language code that runs deploys and is tested as an application would. __Its no more Infrastructure-As-Code it is Infrastructure-Is-Code!__


#### References

- [AWS CDK](https://docs.aws.amazon.com/cdk/latest/guide/home.html)
- [SST](https://docs.serverless-stack.com/)
- Some example CDK projects and SST projects can be found in [my github](https://github.com/harshit9715?tab=repositories)
- [10 Things about AWS CDK](https://faun.pub/10-things-about-aws-cdk-1b8c2d65fdde)
