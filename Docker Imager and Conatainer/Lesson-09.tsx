=========================================================================================
         PUSHING DOCKER IMAGE TO DOCKER HUB AND PULLING FROM DOCKER HUB
=========================================================================================


=========================================================================================
# 0. DOCKER HUB
=========================================================================================

Docker Hub

= Image Registry

Used to:

- Push images (upload)

- Pull images (download)


=========================================================================================
# 1. LOGIN
=========================================================================================

Login first:

docker login


Enter:

- Username

- Password / Token


=========================================================================================
# 2. IMAGE MUST BE TAGGED PROPERLY
=========================================================================================

Format:

USERNAME/IMAGE_NAME:TAG


Example:

ridoan/myapp:v1


Tag image:

docker tag myapp ridoan/myapp:v1


=========================================================================================
# 3. PUSH IMAGE TO DOCKER HUB
=========================================================================================

Command:

docker push ridoan/myapp:v1


Uploads image to Docker Hub.


=========================================================================================
# 4. PULL IMAGE FROM DOCKER HUB
=========================================================================================

Command:

docker pull ridoan/myapp:v1


Downloads image.


=========================================================================================
# 5. RUN PULLED IMAGE
=========================================================================================

docker run ridoan/myapp:v1


Creates container from pulled image.


=========================================================================================
# 6. FULL FLOW
=========================================================================================

Build:

docker build -t myapp .

↓

Tag:

docker tag myapp ridoan/myapp:v1

↓

Login:

docker login

↓

Push:

docker push ridoan/myapp:v1

---------------------------------------------------------

Later on another machine:

Pull:

docker pull ridoan/myapp:v1

↓

Run:

docker run ridoan/myapp:v1


=========================================================================================
# 7. INTERVIEW QUESTION
=========================================================================================

Q: How do you push and pull a Docker image using Docker Hub?

Answer:

Build the image, tag it with USERNAME/IMAGE:TAG, use docker push to upload it
to Docker Hub, and use docker pull to download it on another machine.


=========================================================================================
# END
=========================================================================================