# Cloud-AutoUpdate Project

### This is an example of how application can be deployed into Kubernetes and can be automatically updated from dockerhub. 

#### Project contains:

- Web application code (Simple React project)
- Dockerfile to containerize web application and use Nginx as web server host
- Kubernetes definition files to install application into Kubernetes cluster.
   - Deployment for application and Service as load balancer
   - CronJob, ServiceAccount, Role and RoleBinding entities to make automated autoupdates of the deployed Cloud-Autoupdate app into Kubernetes cluster.


If you have more questions, feel free to contact me.
Thank you,

Ilya Ovchelupov