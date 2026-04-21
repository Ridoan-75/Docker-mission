=========================================================================================
                        DEEP DIVE INTO DOCKER IMAGE
=========================================================================================


=========================================================================================
# 0. WHAT IS A DOCKER IMAGE (RECAP)
=========================================================================================

Docker Image = Read-only template

Contains:

- App code
- Dependencies
- Runtime
- Libraries
- Configurations

Used to create containers.


=========================================================================================
# 1. INTERNAL STRUCTURE OF IMAGE
=========================================================================================

A Docker Image is built using layers.

Each instruction in Dockerfile creates a new layer.

Example Dockerfile:

FROM node:20
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm","start"]


Layers:

Layer 1 → node:20 (base image)

Layer 2 → WORKDIR /app

Layer 3 → COPY files

Layer 4 → RUN npm install

Layer 5 → CMD


Final Image = Combination of all layers


=========================================================================================
# 2. WHAT IS A LAYER?
=========================================================================================

Layer = A filesystem change

Examples:

- Adding files
- Installing packages
- Changing directory


Each layer is:

- Read-only
- Cached
- Reusable


=========================================================================================
# 3. LAYER CACHING (VERY IMPORTANT)
=========================================================================================

Docker caches layers.

If no change happens,

Docker reuses previous layer.


Example:

RUN npm install

If package.json unchanged,

Docker uses cache.


Speeds up build.


=========================================================================================
# 4. IMAGE BUILD PROCESS
=========================================================================================

docker build reads Dockerfile line by line.

For each instruction:

- Create new layer
- Cache it

Final result = Image


=========================================================================================
# 5. COPY VS RUN IMPACT
=========================================================================================

Bad practice:

COPY . .
RUN npm install

If any file changes → cache breaks


Better:

COPY package*.json ./
RUN npm install
COPY . .


Now cache works better.


=========================================================================================
# 6. READ-ONLY NATURE
=========================================================================================

Images are immutable.

You do NOT change images.

Instead:

Create new image.


=========================================================================================
# 7. IMAGE ID & TAG
=========================================================================================

Each image has:

- Image ID (unique)

- Tag (human readable)


Example:

myapp:latest

myapp:v1


Tag helps versioning.


=========================================================================================
# 8. WHERE IMAGES ARE STORED
=========================================================================================

Local:

On your machine

---------------------------------------------------------

Remote:

Docker Hub

Other registries


=========================================================================================
# 9. IMAGE REGISTRY
=========================================================================================

Registry = Storage for images

Example:

Docker Hub


Pull image:

docker pull nginx


Push image:

docker push myapp


=========================================================================================
# 10. IMAGE SIZE
=========================================================================================

Images can be large or small.

Depends on:

- Base image
- Installed packages
- Files


Use smaller base images like:

alpine


=========================================================================================
# 11. MULTI-LAYER ADVANTAGE
=========================================================================================

Layers allow:

- Reuse

- Faster builds

- Efficient storage


Different images can share same layers.


=========================================================================================
# 12. HOW CONTAINER USES IMAGE
=========================================================================================

Image = Read-only layers

Container adds:

Writable layer on top


So:

Image (RO)

+

Container Layer (RW)


=========================================================================================
# 13. COMMANDS FOR IMAGES
=========================================================================================

List images:

docker images

---------------------------------------------------------

Remove image:

docker rmi IMAGE_ID

---------------------------------------------------------

Pull image:

docker pull nginx

---------------------------------------------------------

Build image:

docker build -t myapp .


=========================================================================================
# 14. INTERVIEW QUESTION
=========================================================================================

Q: What are Docker image layers and why are they important?

Answer:

Docker images are built using multiple read-only layers, where each layer
represents a filesystem change. Layers are important because they enable
caching, reuse, and efficient storage, making builds faster and images smaller.


=========================================================================================
# 15. FINAL SUMMARY
=========================================================================================

Docker Image:

- Read-only template
- Built from layers
- Uses caching
- Stored locally or in registry
- Used to create containers

Key concept:

Image = Layers + Cache + Template


=========================================================================================
                                    THE END             
=========================================================================================