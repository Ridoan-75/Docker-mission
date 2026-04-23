=========================================================================================
                 MANAGING VOLUMES WITH THE DOCKER CLI
=========================================================================================


=========================================================================================
# 0. CORE IDEA
=========================================================================================

Docker CLI provides commands to:

- Create volumes
- List volumes
- Inspect volumes
- Remove volumes
- Clean unused volumes


=========================================================================================
# 1. CREATE VOLUME
=========================================================================================

Command:

docker volume create myvolume


Creates a new volume named "myvolume".


=========================================================================================
# 2. LIST VOLUMES
=========================================================================================

Command:

docker volume ls


Shows all volumes.


=========================================================================================
# 3. INSPECT VOLUME
=========================================================================================

Command:

docker volume inspect myvolume


Shows:

- Mount location
- Driver
- Metadata


=========================================================================================
# 4. USE VOLUME IN CONTAINER
=========================================================================================

Command:

docker run -v myvolume:/app/data nginx


Meaning:

- myvolume → volume name
- /app/data → path inside container


=========================================================================================
# 5. REMOVE VOLUME
=========================================================================================

Command:

docker volume rm myvolume


Removes volume.


Important:

Volume must NOT be in use.


=========================================================================================
# 6. REMOVE UNUSED VOLUMES
=========================================================================================

Command:

docker volume prune


Deletes all unused volumes.


Use carefully.


=========================================================================================
# 7. CHECK WHICH CONTAINER USES VOLUME
=========================================================================================

Use:

docker inspect CONTAINER_ID


Check "Mounts" section.


=========================================================================================
# 8. NAMED VOLUME VS ANONYMOUS
=========================================================================================

Named Volume:

docker volume create myvolume


---------------------------------------------------------

Anonymous Volume:

docker run -v /app/data nginx


No name given.


Harder to manage.


=========================================================================================
# 9. MOST USED COMMANDS
=========================================================================================

docker volume create myvolume

docker volume ls

docker volume inspect myvolume

docker volume rm myvolume

docker volume prune


=========================================================================================
# 10. INTERVIEW QUESTION
=========================================================================================

Q: How do you manage Docker volumes using CLI?

Answer:

You can use docker volume create to create, docker volume ls to list,
docker volume inspect to view details, docker volume rm to remove,
and docker volume prune to clean unused volumes.


=========================================================================================
                        THE END
=========================================================================================