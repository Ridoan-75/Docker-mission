=========================================================================================
               UNDERSTANDING IMAGE TYPES AND USING PRE-BUILT IMAGES
=========================================================================================


=========================================================================================
# 0. WHAT IS A PRE-BUILT IMAGE?
=========================================================================================

Pre-built image = Already created image

Built by someone else.

You use it directly.

No need to build from scratch.


Example:

- nginx

- postgres

- redis

- node


=========================================================================================
# 1. WHERE DO PRE-BUILT IMAGES COME FROM?
=========================================================================================

Mostly from:

Docker Hub

(Default image registry)


When you run:

docker run nginx

Docker pulls image from Docker Hub.


=========================================================================================
# 2. IMAGE TYPES
=========================================================================================

Common types:


---------------------------------------------------------
1. Official Images
---------------------------------------------------------

Maintained by trusted sources.

Examples:

- nginx

- postgres

- redis

- node


Recommended.


---------------------------------------------------------
2. Custom Images
---------------------------------------------------------

Images you build yourself.

Using:

Dockerfile


Used for your own app.


---------------------------------------------------------
3. Base Images
---------------------------------------------------------

Starting point images.

Examples:

- ubuntu

- alpine

- node


Used to build other images.


=========================================================================================
# 3. OFFICIAL VS CUSTOM
=========================================================================================

Official image

Ready-made.

Example:

docker run postgres


---------------------------------------------------------

Custom image

You build.

Example:

docker build -t myapp .


=========================================================================================
# 4. USING PRE-BUILT IMAGES
=========================================================================================

Run nginx:

docker run nginx


---------------------------------------------------------

Run redis:

docker run redis


---------------------------------------------------------

Run postgres:

docker run postgres


Simple.


=========================================================================================
# 5. PULL IMAGE ONLY
=========================================================================================

Download image without running:

docker pull nginx


This only pulls image.


Does not create container.


=========================================================================================
# 6. SEE DOWNLOADED IMAGES
=========================================================================================

docker images


Shows local images.


=========================================================================================
# 7. WHAT IS IMAGE TAG?
=========================================================================================

Tag = Version


Example:

nginx:latest

nginx:1.25


---------------------------------------------------------

Run specific version:

docker run nginx:1.25


Good practice.


=========================================================================================
# 8. WHAT IS ALPINE IMAGE?
=========================================================================================

Very small lightweight image.

Example:

node:alpine


Used for smaller images.


=========================================================================================
# 9. WHY USE PRE-BUILT IMAGES?
=========================================================================================

Because they are:

- Fast

- Ready to use

- Trusted

- Save time


Very common in real work.


=========================================================================================
# 10. INTERVIEW QUESTION
=========================================================================================

Q: What are pre-built Docker images?

Answer:

Pre-built Docker images are ready-made images available in registries like
Docker Hub that can be pulled and used directly without building from scratch.


=========================================================================================
                                     THE END
=========================================================================================