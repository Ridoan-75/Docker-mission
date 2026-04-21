=========================================================================================
                         WHAT IS IMAGE & CONTAINER
=========================================================================================


=========================================================================================
# 0. CORE IDEA
=========================================================================================

Image and Container are not the same.

Very important.


Image = Blueprint / Template

---------------------------------------------------------

Container = Running instance of an Image


Formula:

Image → Creates Container


=========================================================================================
# 1. WHAT IS A DOCKER IMAGE?
=========================================================================================

A Docker Image is a packaged template containing:

- Application code

- Dependencies

- Libraries

- Runtime

- Configurations


It is used to create containers.


Think:

Image = Recipe


=========================================================================================
# 2. WHAT IS A CONTAINER?
=========================================================================================

A Container is a running instance created from an Image.

It is the actual running environment.


Think:

Container = Cooked food from recipe


=========================================================================================
# 3. SIMPLE ANALOGY
=========================================================================================

Class vs Object

Image = Class

Container = Object


---------------------------------------------------------

Blueprint vs House

Image = Blueprint

Container = Built House


Same idea.


=========================================================================================
# 4. RELATIONSHIP
=========================================================================================

One Image

Can create

Multiple Containers


Example:

nginx image

can create:

- Container A

- Container B

- Container C


One image → many containers


=========================================================================================
# 5. IMAGE IS STATIC
=========================================================================================

Image:

- Read-only

- Static

- Template


It does not "run" itself.


=========================================================================================
# 6. CONTAINER IS DYNAMIC
=========================================================================================

Container:

- Runs

- Executes processes

- Can stop

- Can start

- Can be removed


It is alive while running.


=========================================================================================
# 7. EXAMPLE
=========================================================================================

Command:

docker run nginx


What happens?

nginx = Image

---------------------------------------------------------

Docker creates:

nginx container

and runs it.


=========================================================================================
# 8. IMAGE VS CONTAINER
=========================================================================================

Feature          Image                Container

Purpose          Template             Running instance

State            Static               Dynamic

Runnable         No                   Yes

Mutable          Typically No          Yes

Can have many?   Creates many          Created from one image


=========================================================================================
# 9. HOW TO SEE IMAGES
=========================================================================================

docker images


Shows local images.


=========================================================================================
# 10. HOW TO SEE CONTAINERS
=========================================================================================

docker ps

Running containers

---------------------------------------------------------

docker ps -a

All containers


=========================================================================================
# 11. HOW IMAGE BECOMES CONTAINER
=========================================================================================

Flow:

Docker Image

↓

docker run

↓

Container Created

↓

Container Running


=========================================================================================
# 12. INTERVIEW QUESTION
=========================================================================================

Q: What is the difference between a Docker image and a container?

Answer:

A Docker image is a read-only template containing application code and
dependencies.

A container is a running instance created from that image.


=========================================================================================
                                    THE END
=========================================================================================