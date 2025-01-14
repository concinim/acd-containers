---
title: "Customizing"
excerpt: "Customizing."
categories: How To
slug: customizing
toc: true
---
<!-- ---

copyright:
  years: 2011, 2019
lastupdated: "2019-04-12"

keywords: annotator clinical data, clinical data, annotation

subcollection: wh-acd

--- -->

<!-- # Customizing -->

The Annotator for Clinical Data Configuration Editor supports extensive customization of the annotators as well as the ability to preview the customizations and export them in the form of a cartridge (zip file) that can be deployed directly to the service via the _cartridges_ APIs.

The Configuration Editor facilitates the following customizations:

`Table 1. Customizations facilitated by the Configuration Editor`

| Customization | Description |
|----|----|
| Dictionaries | A set of terms describing a unique concept that is matched against the provided text to be analyzed. |
| Derived Concepts | Rules for deriving concepts when one or more other concepts or tokens appears in the surrounding context. |
| Filters | Conditional rules for omitting undesired annotations from the service response. |
| Clinical Attributes | Configurable annotations built upon one or more other annotations. Optionally, semantically linked values in the surrounding context can be captured and associated with the attribute. |
| Derived Clincal Attributes | Conditional logic and expressions for deriving new attributes based on values associated with other attributes. |
| Attribute Qualifiers | Configurations for detecting qualifying terms in the immediate context of an attribute and capturing the qualifiers as a field within the output attribute annotation. |
| Ontological Relations | Ontology configurations for extracting ontological relations between concepts cooccurring within the same sentence. |
| CPT Code Mapping | Mapping configurations for outputting CPT codes from the concept and procedure annotators. |

[Contact your Merative representative](/support/support/) to learn more about leveraging the Configuration Editor to customize the behavior of the service.

## Cartridge deployment

1. The consumer uses the Annotator for Clinical Data Configuration Editor to create a new cartridge (or modify an existing one) and customizes the contents (artifacts) of the cartridge to their domain. After that, the consumer will **Export** the cartridge in order to save a snapshot of the cartridge.

2. The consumer deploys the cartridge snapshot (a zip file) to Annotator for Clinical Data using _POST /v1/cartridges_ API. A successful request for creating a cartridge will return with `HTTP 202 Accepted` response code and will include the path to the resource, e.g., `/v1/cartridges/cartridgeId` in the response body and the response header. The resource path can be used in _GET /v1/cartridges/cartridgeId_ API to obtain the overall deployment status. In the following curl example, the consumer's cartridge file is `/path/to/name_of_cartridge_file.zip`.

```Curl

 curl -X POST --header "Authorization: Bearer xxxxxxxxxxxxxxx" \
  --header "Accept:application/json" \
 --header "Content-Type:application/octet-stream" \
 --data-binary @/path/to/name_of_cartridge_file.zip \
 "<route_host>/v1/cartridges?version=2019-09-01"

```

Use the _POST /v1/cartridges_ operation for the initial deployment of a cartridge version and _PUT /v1/cartridges_ to redploy cartridge updates. Different published versions of a cartridge (e.g. cartridge_v1.0, cartridge_v2.0) will need to be initially deployed via the POST operation and subsequently redeployed via the PUT operation.

3. The consumer redeploys a previously deployed cartridge version using the _PUT /v1/cartridges_ API. The cartridge ID is extracted directly from the cartridge zip file. A successful request for updating the cartridge (re)deployment will result in a `HTTP 202 Accepted` response code and will include the path to the resource, e.g., `/v1/cartridges/cartridgeId` in the response body and the response header.

```Curl

 curl -X PUT --header "Authorization: Bearer xxxxxxxxxxxxxxx" \
 --header "Accept:application/json" \
 --header "Content-Type:application/octet-stream" \
 --data-binary @/path/to/name_of_cartridge_file.zip \
 "<route_host>/v1/cartridges?version=2019-09-01"

```

4. The consumer retrieves a list of deployed cartridges for a given tenant using the _GET /v1/cartridges_ API. An empty list is returned if no cartridges have been deployed.

```Curl

 curl -X GET --header "Authorization: Bearer xxxxxxxxxxxxxxx" \
 --header "Accept:application/json" \
 "<route_host>/v1/cartridges?version=2019-09-01"

```

5. The consumer can view the status of a specific cartridge deployment by invoking the _GET /v1/cartridges/{cartridgeId}_ API with the cartridge ID supplied as a path parameter. If the supplied ID does not exists, then an `HTTP 404 Not Found` response code is returned. The following curl command returns the deployment status of the `cartridge_id`.

```Curl

 curl -X GET --header "Authorization: Bearer xxxxxxxxxxxxxxx" \
 --header "Accept:application/json" \
 "<route_host>/v1/cartridges/cartridge_id?version=2019-09-01"

```

The _cartridges_ API is the recommended way for a cartridge deployment and is compatible with the legacy _deploy_ API. In many situations, the consumer has already deployed a cartridge using the _deploy_ API and the consumer can immediately update the same cartridge using the above POST and PUT operations on the _cartridges_ API to initially create and to subsequently update the cartridge deployment.
A typical _POST /v1/cartridges_ operation creates and initializes a deployment for cartridge that has never been deployed to the system. For cartridges that have been previously deployed with the _deploy_ API, the _POST /v1/cartridges_ API will create, initialize, and update an existing cartridge deployment. Subsequent redeployments of a cartridge must use the _PUT /v1/cartridges_ API.

## Legacy cartridge deployment

1. The consumer uses the Annotator for Clinical Data Configuration Editor to create a new cartridge (or modify an existing one) and customizes the contents (artifacts) of the cartridge to their domain. After that, the consumer will **Export** the cartridge in order to save a snapshot of the cartridge.
2. The consumer deploys the cartridge snapshot (a zip file) to Annotator for Clinical Data using _POST /v1/deploy_ API. In the following curl example, the consumer's cartridge file is `./my_cartridges/name_of_cartridge_file.zip`, and `update=false` means do not update the resource if it already exists. Specify the `update=true` parameter on the _deploy_ API to update an existing cartridge.

A successful cartridge deploy will result in `HTTP 201 Created` if it is a new resource, or `HTTP 200 OK` if `update=true` was specified and the existing resource was updated.

```Curl
curl -X POST --header "Authorization: Bearer xxxxxxxxxxxxxxx" \
--header “Content-Type: application/octet-stream” \
--header "Accept: application/json" \
--data-binary @./my_cartridges/name_of_cartridge_file.zip \
"<route_host>/v1/deploy?update=false&version=2018-01-17"
```

Some large cartridge deployments can exceed the request timeout thresholds defined in the data center gateways (usually after 2 mins). See [Cartridge Deployment Timeout](/usage/known_limitations/#cartridge-deployment-timeouts) for additional considerations during the deployment of large cartridges.
