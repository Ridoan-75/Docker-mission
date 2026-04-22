=========================================================================================
                    THE WRITABLE CONTAINER LAYER EXPLAINED
=========================================================================================


=========================================================================================
# 0. CORE IDEA
=========================================================================================

Docker Image = Read-only layers

Container = Image + Writable Layer


Writable Layer is the only place where changes happen during runtime.


=========================================================================================
# 1. IMAGE VS CONTAINER LAYERS
=========================================================================================

Image:

- Multiple layers
- Read-only (cannot change)

---------------------------------------------------------

Container:

- Uses image layers
- Adds one extra layer:

Writable Layer (read-write)


=========================================================================================
# 2. WHAT IS WRITABLE LAYER?
=========================================================================================

Writable Layer = Temporary storage on top of image

Used for:

- Creating files
- Modifying files
- Deleting files


All runtime changes go here.


=========================================================================================
# 3. HOW IT WORKS (COPY-ON-WRITE)
=========================================================================================

Docker uses Copy-on-Write mechanism.


If file exists in image:

- Container does NOT modify original
- It copies file to writable layer
- Then modifies it


Original image stays unchanged.


=========================================================================================
# 4. EXAMPLE
=========================================================================================

Image contains:

/app/config.json


Inside container:

You edit config.json


What happens:

- File copied to writable layer
- Modified there


Image remains same.


=========================================================================================
# 5. IMPORTANT BEHAVIOR
=========================================================================================

Writable layer is:

- Temporary
- Tied to container lifecycle


If container is deleted:

❌ All data in writable layer is lost


=========================================================================================
# 6. WHY THIS IS IMPORTANT
=========================================================================================

Because:

Any data written inside container
(without volume)

WILL BE LOST


=========================================================================================
# 7. BAD PRACTICE
=========================================================================================

Storing important data in container.


Example:

Database inside container without volume


Delete container → data gone


=========================================================================================
# 8. SOLUTION
=========================================================================================

Use:

- Volumes
- Bind mounts


These store data outside writable layer.


=========================================================================================
# 9. PERFORMANCE NOTE
=========================================================================================

Writable layer is slower than volumes.

Why?

Because of layered filesystem overhead.


=========================================================================================
# 10. VISUAL FLOW
=========================================================================================

Image Layers (Read-only)
   ↓
--------------------------
Writable Layer (Container)
   ↓
All runtime changes here


=========================================================================================
# 11. INTERVIEW QUESTION
=========================================================================================

Q: What is the writable container layer in Docker?

Answer:

The writable container layer is a temporary read-write layer added on top of
read-only image layers, where all runtime changes are stored. It is deleted
when the container is removed.


=========================================================================================
                                   THE END
=========================================================================================