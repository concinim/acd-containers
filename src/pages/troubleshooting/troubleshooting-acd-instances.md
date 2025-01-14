---
title: "Troubleshooting ACD Instances"
excerpt: "Troubleshooting ACD Container Edition Instances"
categories: troubleshooting
slug: troubleshooting-acd-instances
toc: true
---

## Troubleshooting ACD instances

### ACD operator not starting

To diagnose problems with resources not started as expected follow these steps:

1. Check the logs on the ACD operator pod for errors. For example `merative-acd-operator-controller-manager-664b45885f-trhsp`

   ```
   oc logs <pod> --namespace <namespace> | grep controller
   ```

   See [Logging and Monitoring](/troubleshooting/logging-monitoring) for more details.

### ACD operator or ACD instance not starting

To diagnose problems with resources not started as expected follow these steps:

1. Check for errors or events on the deployments.

   List deployments

   ```
   oc get deployments --namespace <namespace>
   ```

   - `<namespace>` namespace where the operator or instance was installed

   Describe a specific deployment

    ```
   oc describe deployments <deployment> --namespace <namespace>
   ```

   - `<deployment>` ACD deployment name, for example `merative-acd-acd`
   - `<namespace>` namespace where the operator or instance was installed

1. Check for errors or events on the replicasets.

   List replica sets

   ```
   oc get replicasets --namespace <namespace>
   ```

   - `<namespace>` namespace where the operator or instance was installed

   Describe a specific replicaset

    ```
   oc describe replicasets <replicaset> --namespace <namespace>
   ```

   - `<replicaset>` ACD replica set name, for example `merative-acd-acd-7c8bb688d4`
   - `<namespace>` namespace where the operator or instance was installed

1. Check for errors or events on the pods.

   List pods

   ```
   oc get pods --namespace <namespace>
   ```

   Describe a specific pod

    ```
   oc describe pods <pod> --namespace <namespace>
   ```

   - `<pod>` ACD pod name, for example `merative-acd-acd-544cc7998b-4stpw`
   - `<namespace>` namespace where the operator or instance was installed

1. Check the logs for errors

   ```
   oc logs <pod> --namespace <namespace>
   ```

   - `<pod>` ACD pod name, for example `merative-acd-acd-544cc7998b-4stpw`
   - `<namespace>` namespace where the operator or instance was installed

   See [Logging and Monitoring](/troubleshooting/logging-monitoring) for more details.
