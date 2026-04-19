=========================================================================================
                        WRITING OUR FIRST DOCKERFILE
=========================================================================================


=========================================================================================
# 0. WHAT IS A DOCKERFILE?
=========================================================================================

A Dockerfile is a text file containing instructions
to build a Docker Image.

It tells Docker:

- Which base image to use

- Copy what files

- Run what commands

- Start which app


Dockerfile → builds Image

Image → creates Container


=========================================================================================
# 1. FIRST SIMPLE DOCKERFILE
=========================================================================================

Create file:

Dockerfile

(Note: filename usually has no extension)


Content:

FROM node:20

WORKDIR /app

COPY . .

RUN npm install

CMD ["npm","start"]


=========================================================================================
# 2. BREAKDOWN
=========================================================================================

FROM node:20

Uses base image.

Starting point.

---------------------------------------------------------

WORKDIR /app

Sets working directory inside container.

---------------------------------------------------------

COPY . .

Copies project files into container.

---------------------------------------------------------

RUN npm install

Installs dependencies while building image.

---------------------------------------------------------

CMD ["npm","start"]

Starts app when container runs.


=========================================================================================
# 3. BUILD IMAGE FROM DOCKERFILE
=========================================================================================

Command:

docker build -t myapp .


Meaning:

-t myapp

Image name

---------------------------------------------------------

.

Current directory
(where Dockerfile exists)


=========================================================================================
# 4. RUN CONTAINER FROM YOUR IMAGE
=========================================================================================

docker run myapp


Creates container from your image.


=========================================================================================
# 5. FLOW
=========================================================================================

Write Dockerfile

↓

Build Image

docker build -t myapp .

↓

Run Container

docker run myapp


=========================================================================================
# 6. WHY DOCKERFILE MATTERS
=========================================================================================

Without Dockerfile:

Manual setup.

---------------------------------------------------------

With Dockerfile:

Everything defined as code.


Very important.


=========================================================================================
# 7. INTERVIEW QUESTION
=========================================================================================

Q: What is a Dockerfile?

Answer:

A Dockerfile is a file containing instructions used to build a Docker image.


=========================================================================================
                                    THE END
=========================================================================================